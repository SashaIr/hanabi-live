/*
    Initialization functions for the HanabiCard object
*/

// Imports
import * as arrows from './arrows';
import * as constants from '../../constants';
import drawPip from './drawPip';
import globals from './globals';
import * as graphics from './graphics';
import HanabiCardClick from './HanabiCardClick';
import HanabiCardClickSpeedrun from './HanabiCardClickSpeedrun';
import * as notes from './notes';
import possibilitiesCheck from './possibilitiesCheck';

export function image() {
    // Create the "bare" card image, which is the main card grahpic
    // If the card is not revealed, it will just be a gray rectangle
    // The pips and other elements of a card are drawn on top of the bare image
    this.bare = new graphics.Image({
        width: constants.CARD_W,
        height: constants.CARD_H,
    });
    const self = this;
    this.bare.setSceneFunc(function setSceneFunc(context) {
        scaleCardImage(
            context,
            self.bareName,
            this.getWidth(),
            this.getHeight(),
            this.getAbsoluteTransform(),
        );
    });
    this.add(this.bare);
}

export function border() {
    // The card will get a border when it becomes clued
    this.cluedBorder = new graphics.Rect({
        x: 3,
        y: 3,
        width: constants.CARD_W - 6,
        height: constants.CARD_H - 6,
        cornerRadius: 6,
        strokeWidth: 16,
        stroke: '#ffa500', // Orange
        visible: false,
        listening: false,
    });
    this.add(this.cluedBorder);

    // The card will also get a border if it is not clued but has a particular note on it
    this.noteBorder = new graphics.Rect({
        x: 3,
        y: 3,
        width: constants.CARD_W - 6,
        height: constants.CARD_H - 6,
        cornerRadius: 6,
        strokeWidth: 16,
        stroke: '#ffe6b3', // Light yellow
        visible: false,
        listening: false,
    });
    this.add(this.noteBorder);
}

export function pips() {
    // Initialize the suit pips (colored shapes) on the back of the card,
    // which will be removed one by one as the card gains negative information
    this.suitPips = new graphics.Group({
        x: 0,
        y: 0,
        width: Math.floor(constants.CARD_W),
        height: Math.floor(constants.CARD_H),
        visible: false,
        listening: false,
    });
    this.add(this.suitPips);

    const { suits } = globals.variant;
    this.suitPipsMap = new Map(); // Keys are suit objects
    this.suitPipsXMap = new Map(); // Keys are suit objects
    for (let i = 0; i < suits.length; i++) {
        const suit = suits[i];

        // Set the pip at the middle of the card
        const x = Math.floor(constants.CARD_W * 0.5);
        const y = Math.floor(constants.CARD_H * 0.5);
        const scale = { // Scale numbers are magic
            x: 0.4,
            y: 0.4,
        };
        // Transform polar to Cartesian coordinates
        // The magic number added to the offset is needed to center things properly
        // We don't know why it's needed; perhaps something to do with the shape functions
        const offsetBase = constants.CARD_W * 0.7;
        const offsetTrig = ((-i / suits.length) + 0.25) * Math.PI * 2;
        const offset = {
            x: Math.floor((offsetBase * Math.cos(offsetTrig)) + (constants.CARD_W * 0.25)),
            y: Math.floor((offsetBase * Math.sin(offsetTrig)) + (constants.CARD_W * 0.3)),
        };
        let { fill } = suit;
        if (suit.fill === 'multi') {
            fill = undefined;
        }

        const suitPip = new graphics.Shape({
            x,
            y,
            scale,
            offset,
            fill,
            stroke: 'black',
            strokeWidth: 5,
            sceneFunc: (ctx) => {
                drawPip(ctx, suit, false, false);
            },
            listening: false,
        });

        // Gradient numbers are magic
        if (suit.fill === 'rainbow') {
            suitPip.fillRadialGradientColorStops([
                0, suit.fillColors[0],
                0.25, suit.fillColors[1],
                0.5, suit.fillColors[2],
                0.75, suit.fillColors[3],
                1, suit.fillColors[4],
            ]);
            suitPip.fillRadialGradientStartPoint({
                x: 75,
                y: 140,
            });
            suitPip.fillRadialGradientEndPoint({
                x: 75,
                y: 140,
            });
            suitPip.fillRadialGradientStartRadius(0);
            suitPip.fillRadialGradientEndRadius(Math.floor(constants.CARD_W * 0.25));
        }
        suitPip.rotation(0);
        this.suitPips.add(suitPip);
        this.suitPipsMap.set(suit, suitPip);

        // Also create the X that will show when a certain suit can be ruled out
        const suitPipX = new graphics.Shape({
            x,
            y,
            scale,
            offset,
            fill: 'black',
            stroke: 'black',
            opacity: 0.8,
            visible: false,
            sceneFunc: (ctx, shape) => {
                const width = 50;
                const xx = Math.floor((constants.CARD_W * 0.25) - (width * 0.45));
                const xy = Math.floor((constants.CARD_H * 0.25) - (width * 0.05));
                drawX(ctx, shape, xx, xy, 50, width);
            },
            listening: false,
        });
        this.suitPips.add(suitPipX);
        this.suitPipsXMap.set(suit, suitPipX);
    }

    // Initialize the rank pips, which are black squares along the bottom of the card
    this.rankPips = new graphics.Group({
        x: 0,
        y: Math.floor(constants.CARD_H * 0.85),
        width: constants.CARD_W,
        height: Math.floor(constants.CARD_H * 0.15),
        visible: false,
        listening: false,
    });
    this.add(this.rankPips);

    this.rankPipsMap = new Map();
    this.rankPipsXMap = new Map();
    for (const rank of globals.variant.ranks) {
        const x = Math.floor(constants.CARD_W * ((rank * 0.19) - 0.14));
        const y = 0;
        let opacity = 1;
        if (rank === constants.START_CARD_RANK) {
            // We don't want to show the rank pip that represents a "START" card
            opacity = 0;
        }
        const rankPip = new graphics.Rect({
            x,
            y,
            width: Math.floor(constants.CARD_H * 0.1),
            height: Math.floor(constants.CARD_H * 0.1),
            fill: 'black',
            stroke: 'black',
            strokeWidth: 4,
            cornerRadius: 0.02 * constants.CARD_H,
            opacity,
            listening: false,
        });
        this.rankPips.add(rankPip);
        this.rankPipsMap.set(rank, rankPip);

        rankPip.showPositiveClue = () => {
            rankPip.setFill('#ffa500'); // Orange
            // (the same color as the "clued" border around a card)
        };
        rankPip.hidePositiveClue = () => {
            rankPip.setFill('black');
        };

        // Also create the X that will show when a certain rank can be ruled out
        opacity = 0.8;
        if (rank === constants.START_CARD_RANK) {
            // We don't want to show the rank pip that represents a "START" card
            opacity = 0;
        }
        const rankPipX = new graphics.Shape({
            x,
            y,
            fill: '#e6e6e6',
            stroke: 'black',
            strokeWidth: 2,
            opacity: 0.8,
            visible: false,
            sceneFunc: (ctx, shape) => {
                const width = 20;
                const xx = Math.floor(constants.CARD_W * 0.035);
                const xy = Math.floor(constants.CARD_H * 0.047);
                drawX(ctx, shape, xx, xy, 10, width);
            },
            listening: false,
        });
        this.rankPips.add(rankPipX);
        this.rankPipsXMap.set(rank, rankPipX);
    }
}

export function note() {
    // Define the note indicator image
    const noteX = 0.78;
    const noteY = 0.03;
    const size = 0.2 * constants.CARD_W;
    this.noteGiven = new graphics.Image({
        x: noteX * constants.CARD_W,
        // If the cards have triangles on the corners that show the color composition,
        // the images will overlap
        // Thus, we move it downwards if this is the case
        y: (globals.variant.offsetCornerElements ? noteY + 0.1 : noteY) * constants.CARD_H,
        align: 'center',
        image: globals.ImageLoader.get('note'),
        width: size,
        height: size,
        rotation: 180,
        shadowColor: 'black',
        shadowBlur: 10,
        shadowOffset: {
            x: 0,
            y: 0,
        },
        shadowOpacity: 0.9,
        visible: notes.shouldShowIndicator(this.order),
        listening: false,
    });
    this.noteGiven.setScale({
        x: -1,
        y: -1,
    });
    // We might rotate the note indicator later on in order to
    // indicate to spectators that the note was updated
    this.noteGiven.rotated = false;
    this.add(this.noteGiven);

    // If the user mouses over the card, show a tooltip that contains the note
    // (we don't use the "tooltip.init()" function because we need the extra conditions in the
    // "mousemove" event)
    this.tooltipName = `card-${this.order}`;
    this.on('mousemove', function cardMouseMove() {
        // Don't do anything if there is not a note on this card
        if (!this.noteGiven.visible()) {
            return;
        }

        // Don't open any more note tooltips if the user is currently editing a note
        if (globals.editingNote !== null) {
            return;
        }

        // If we are spectating and there is an new note, mark it as seen
        if (this.noteGiven.rotated) {
            this.noteGiven.rotated = false;
            this.noteGiven.rotate(-15);
            globals.layers.card.batchDraw();
        }

        globals.activeHover = this;
        notes.show(this);
    });

    this.on('mouseout', function cardMouseOut() {
        globals.activeHover = null;

        // Don't close the tooltip if we are currently editing a note
        if (globals.editingNote !== null) {
            return;
        }

        const tooltip = $(`#tooltip-${this.tooltipName}`);
        tooltip.tooltipster('close');
    });
}

// In a game, click on a teammate's hand to it show as it would to that teammate
// (or show your own hand as it should appear without any identity notes on it)
// (or, in a replay, show the hand as it appeared at that moment in time)
export function empathy() {
    this.on('mousedown', (event) => {
        if (
            event.evt.which !== 1 // Only enable Empathy for left-clicks
            // Disable Empathy if a modifier key is pressed
            // (unless we are in a speedrun,
            // because then Empathy is mapped to Ctrl + left click)
            || (event.evt.ctrlKey && !globals.speedrun && !globals.lobby.settings.speedrunMode)
            || (
                !event.evt.ctrlKey
                && (globals.speedrun || globals.lobby.settings.speedrunMode)
                && !globals.replay
                && !globals.spectating
            )
            || event.evt.shiftKey
            || event.evt.altKey
            || event.evt.metaKey
            || this.tweening // Disable Empathy if the card is tweening
            || this.isPlayed // Clicking on a played card goes to the turn that it was played
            // Clicking on a discarded card goes to the turn that it was discarded
            || this.isDiscarded
            || this.order > globals.deck.length - 1 // Disable empathy for the stack bases
        ) {
            return;
        }

        globals.activeHover = this;
        setEmpathyOnHand(true);
    });

    this.on('mouseup mouseout', (event) => {
        if (event.type === 'mouseup' && event.evt.which !== 1) { // Left-click
            return;
        }

        globals.activeHover = null;
        setEmpathyOnHand(false);
    });

    const setEmpathyOnHand = (enabled) => {
        // Disable Empathy for the stack bases
        if (this.order > globals.deck.length - 1) {
            return;
        }

        const hand = this.parent.parent;
        if (!hand || hand.children.length === 0 || hand.empathy === enabled) {
            return;
        }

        hand.empathy = enabled;
        for (const layoutChild of hand.children) {
            const card = layoutChild.children[0];
            card.empathy = enabled;
            card.setBareImage();
            card.setFade();
        }
        globals.layers.card.batchDraw();
    };
}

export function click() {
    // Define the clue log mouse handlers
    this.on('mousemove tap', () => {
        globals.elements.clueLog.showMatches(this);
        globals.layers.UI.batchDraw();
    });
    this.on('mouseout', () => {
        globals.elements.clueLog.showMatches(null);
        globals.layers.UI.batchDraw();
    });

    // Define the other mouse handlers
    this.on('click tap', HanabiCardClick);
    this.on('mousedown', HanabiCardClickSpeedrun);
    this.on('mousedown', (event) => {
        if (
            event.evt.which !== 1 // Dragging uses left click
            || !this.parent.getDraggable()
        ) {
            return;
        }

        // Hide any visible arrows on the rest of a hand when the card beings to be dragged
        const hand = this.parent.parent;
        let hidden = false;
        for (const layoutChild of hand.children) {
            const card = layoutChild.children[0];
            for (const arrow of globals.elements.arrows) {
                if (arrow.pointingTo === card) {
                    hidden = true;
                    arrows.hideAll();
                    break;
                }
            }
            if (hidden) {
                break;
            }
        }

        // Move this hand to the top
        // (otherwise, the card can appear under the play stacks / discard stacks)
        hand.moveToTop();
    });
}

export function possibilities() {
    if (!possibilitiesCheck()) {
        return;
    }

    // We want to remove all of the currently seen cards from the list of possibilities
    for (let i = 0; i < globals.indexOfLastDrawnCard; i++) {
        const card = globals.deck[i];

        // Don't do anything if this is one of our unknown cards
        if (card.suit === null || card.rank === null) {
            continue;
        }

        // If the card is still in the player's hand and it is not fully "filled in" with clues,
        // then we cannot remove it from the list of possibilities
        // (because they do not know what it is yet)
        if (
            card.holder === this.holder
            && (card.possibleSuits.length > 1 || card.possibleRanks.length > 1)
        ) {
            continue;
        }

        this.removePossibility(card.suit, card.rank, false);
    }
}

export function fixme() {
    this.fixme = new graphics.Image({
        x: 0.1 * constants.CARD_W,
        y: 0.33 * constants.CARD_H,
        width: 0.8 * constants.CARD_W,
        image: globals.ImageLoader.get('wrench'),
        visible: false,
    });
    this.add(this.fixme);
}

export function sparkles() {
    /*
    const spark = new Sparkle({
        x: -50,
        y: -50,
    });
    this.add(spark);
    */
}

/*
    Misc. functions
*/

const scaleCardImage = (ctx, name, width, height, am) => {
    let src = globals.cardImages[name];
    if (!src) {
        throw new Error(`The image "${name}" was not generated.`);
    }

    const dw = Math.sqrt((am.m[0] * am.m[0]) + (am.m[1] * am.m[1])) * width;
    const dh = Math.sqrt((am.m[2] * am.m[2]) + (am.m[3] * am.m[3])) * height;

    if (dw < 1 || dh < 1) {
        return;
    }

    let sw = width;
    let sh = height;
    let steps = 0;

    if (!globals.scaledCardImages[name]) {
        globals.scaledCardImages[name] = [];
    }

    // This code was written by Keldon;
    // scaling the card down in steps of half in each dimension presumably improves the scaling
    while (dw < sw / 2) {
        let scaleCanvas = globals.scaledCardImages[name][steps];
        sw = Math.floor(sw / 2);
        sh = Math.floor(sh / 2);

        if (!scaleCanvas) {
            scaleCanvas = document.createElement('canvas');
            scaleCanvas.width = sw;
            scaleCanvas.height = sh;

            const scaleContext = scaleCanvas.getContext('2d');
            scaleContext.drawImage(src, 0, 0, sw, sh);
            globals.scaledCardImages[name][steps] = scaleCanvas;
        }

        src = scaleCanvas;
        steps += 1;
    }

    ctx.drawImage(src, 0, 0, width, height);
};

const drawX = (ctx, shape, x, y, size, width) => {
    // Start at the top left corner and draw an X
    ctx.beginPath();
    x -= size;
    y -= size;
    ctx.moveTo(x, y);
    x += width / 2;
    y -= width / 2;
    ctx.lineTo(x, y);
    x += size;
    y += size;
    ctx.lineTo(x, y);
    x += size;
    y -= size;
    ctx.lineTo(x, y);
    x += width / 2;
    y += width / 2;
    ctx.lineTo(x, y);
    x -= size;
    y += size;
    ctx.lineTo(x, y);
    x += size;
    y += size;
    ctx.lineTo(x, y);
    x -= width / 2;
    y += width / 2;
    ctx.lineTo(x, y);
    x -= size;
    y -= size;
    ctx.lineTo(x, y);
    x -= size;
    y += size;
    ctx.lineTo(x, y);
    x -= width / 2;
    y -= width / 2;
    ctx.lineTo(x, y);
    x += size;
    y -= size;
    ctx.lineTo(x, y);
    x -= size;
    y -= size;
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.closePath();
    ctx.fillStrokeShape(shape);
};
