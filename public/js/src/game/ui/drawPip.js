import svgPathToCommands from './svgPathToCommands';
import drawSvgPath from './drawSvgPath';

const textShapes = [
    'flower',
    'number_sign',
    'tensor_symbol',
    'infinity',
    'null_symbol',
];

const shapeFunctions = {
    blue: (ctx) => {
        ctx.scale(10,10);
        drawSvgPath(ctx, svgPathToCommands("m 12,6 c 0.0592,-0.0519 0.12349,-0.0967 0.18024,-0.15026 c 0.0549,-0.0524 0.50069,-0.41902 0.71707,-0.6859 c 0.13782,-0.16892 0.0001,-0.28746 -0.12028,-0.27624 c -9.01455,0.82058 -10.779182,-0.3523 -10.779182,-0.3523 c -0.846148,2.56152 1.064392,4.01249 1.064392,4.01249 c 0.004,0.002 0.0273,0.006 0.0392,0.008 c -0.57053,2.80096 -0.21823,5.54579 -0.13895,5.62871 c 0,0 1.64989,1.74031 4.1054,0.61981 c 0,0 -0.90164,-1.07873 -1.32628,-6.37384 c 1.22839,-0.15969 2.70681,-0.48201 4.0736,-1.07999 c -0.98519,3.16074 -0.53936,6.73924 -0.44832,6.83402 c 0,0 1.65052,1.74031 4.10416,0.61981 c 0,0 -1.1654,-1.39924 -1.47094,-8.8038"));
        ctx.scale(0.1,0.1);
    },
    white: (ctx) => {
        ctx.scale(2.5,2.5);
        drawSvgPath(ctx, svgPathToCommands("m 22,45 \
        c 2.12997,-3.97531 2.97674,-9.00848 3.11431,-14.87657 \
        c 3.92787,2.36004 8.96579,3.34913 14.90029,3.55548 \
        c -2.34581,3.92313 -3.32541,8.95393 -3.52939,14.87657 \
        c -3.83537,-2.3126 -8.72623,-3.31592 -14.48521,-3.55548 \
        m 27.05866,1.06736 \
        c -0.50758,-4.71297 -0.71394,-9.41171 -0.31072,-14.13654 \
        c 0.58824,-0.71869 1.18833,-1.71726 1.73624,-3.12379 \
        c 2.12522,-5.43403 0.95587,-8.26608 0.46489,-8.91599 \
        c -0.49099,-0.65227 -1.02941,-1.27845 -2.36479,-0.85625\
        c -3.54836,1.12428 -7.35052,1.67456 -11.04358,2.07067 \
        c -4.73431,0.50759 -9.45914,0.71631 -14.21243,0.3036 \
        c -0.41271,-0.0357 -0.84914,-0.0901 -1.28557,-0.14952 \
        c -0.51708,-0.29175 -1.1148,-0.57875 -1.81925,-0.85389 \
        c -5.43403,-2.12285 -8.26608,-0.9535 -8.91598,-0.46252 \
        c -0.65228,0.49099 -1.27846,1.02941 -0.85626,2.36242 \
        c 1.12428,3.54836 1.67456,7.35289 2.07067,11.0412 \
        c 0.47675,4.44732 0.66888,8.88515 0.35341,13.33958 \
        c -0.60246,0.72106 -1.21678,1.73149 -1.77892,3.17123\
        c -2.12523,5.43403 -0.95588,8.26846 -0.46253,8.91836\
        c 0.49099,0.65227 1.02704,1.27845 2.36242,0.85388\
        c 3.54837,-1.12191 7.35052,-1.67456 11.0412,-2.07067\
        c 4.72483,-0.50521 9.4378,-0.71157 14.17449,-0.3036\
        c 0.72106,0.59297 1.72438,1.19781 3.14277,1.75283\
        c 5.43403,2.12286 8.26846,0.95351 8.91598,0.46252\
        c 0.65465,-0.49098 1.27846,-1.0294 0.85863,-2.36241\
        c -1.12665,-3.54837 -1.67693,-7.3529 -2.07067,-11.04121 z"));
        ctx.scale(0.4,0.4);
    },
    green: (ctx) => {
        ctx.scale(10,10);
        drawSvgPath(ctx, svgPathToCommands("m 12.8,11.2 \
        c -0.399335,-0.319468 -1.100314,-1.046191 -2.106901,-1.547834 \
        c 1.006587,-0.502303 1.707566,-1.228366 2.106901,-1.547833\
        c 0.820452,-0.656758 0.409895,-0.984806 0.409895,-0.984806\
        c -0.737943,-1.434963 -1.574235,-2.271255 -2.419768,-3.035602\
        c -0.584811,-0.528045 -0.70362,0.07656 -0.80923,0.547188\
        c -0.156428,0.696359 -0.412536,1.368957 -0.751806,1.996672\
        c -0.475899,0.881836 -1.079193,1.538592 -1.75113,2.184788\
        c -0.672598,-0.646196 -1.275889,-1.302952 -1.751791,-2.184788\
        c -0.338609,-0.627715 -0.595371,-1.300313 -0.751145,-1.996672\
        c -0.106274,-0.470621 -0.22508,-1.075233 -0.80989,-0.547188\
        c -0.845533,0.764347 -1.681825,1.600639 -2.419769,3.035602\
        c 0,0 -0.410554,0.328048 0.409896,0.984806\
        c 0.399995,0.319467 1.100975,1.04553 2.106901,1.547833\
        c -1.005926,0.501643 -1.706906,1.228366 -2.106901,1.547834\
        c -0.82045,0.656097 -0.409896,0.984144 -0.409896,0.984144\
        c 0.737944,1.435624 1.574236,2.271917 2.419769,3.036262\
        c 0.58481,0.528045 0.703622,-0.07656 0.80989,-0.547186\
        c 0.15577,-0.696362 0.412536,-1.36896 0.751145,-1.997334\
        c 0.475902,-0.881175 1.079193,-1.538593 1.751791,-2.184128\
        c 0.671937,0.645535 1.275231,1.302953 1.75113,2.184128\
        c 0.33927,0.628374 0.595372,1.300972 0.751806,1.997334\
        c 0.105616,0.470618 0.224419,1.075231 0.80923,0.547186\
        c 0.845533,-0.764345 1.681825,-1.600638 2.419768,-3.036262\
        c 0,0 0.410557,-0.328047 -0.409895,-0.984144 z"));
        ctx.scale(0.1,0.1);
    },
    yellow: (ctx) => {
        ctx.scale(10,10);
        drawSvgPath(ctx, svgPathToCommands("m 5.5,11\
        c 1.12377,-0.61595 2.487481,-1.53866 3.502518,-2.61018\
        c -0.01157,1.31207 0.13,2.94853 0.578893,4.32924\
        c -1.123162,-0.67487 -2.632053,-1.3965 -4.081411,-1.71906\
        m 8.341413,1.89887\
        c -0.97191,-0.88809 -3.083991,-3.54565 -3.924694,-5.69174\
        c 0.03765,-0.0637 0.08019,-0.12765 0.114811,-0.19256\
        c 0,0 0.492638,-0.5704 -0.441611,-1.737294\
        c -0.933033,-1.166897 -1.71056,-1.27078 -1.918307,-1.244644\
        c -0.207745,0.02608 -0.414884,0.06502 -0.492028,0.414869\
        c -0.291573,1.319985 -1.596363,4.611109 -3.082776,6.383029\
        c -0.05528,0 -0.111762,-0.004 -0.165834,-0.002\
        c 0,0 -0.740474,-0.14215 -1.283528,1.25012\
        c -0.544269,1.39165 -0.244798,2.11755 -0.119054,2.28399\
        c 0.125739,0.16695 0.26363,0.3274 0.605013,0.21928\
        c 1.283527,-0.40639 4.764179,-0.91906 7.042699,-0.52665\
        c 0.0061,0.009 0.01084,0.0206 0.01708,0.0297\
        c 0,0 0.246622,0.71254 1.724532,0.48779\
        c 1.477304,-0.22536 1.95536,-0.84739 2.037366,-1.03934\
        c 0.08079,-0.19256 0.151857,-0.39302 -0.113599,-0.63417 z"));
        ctx.scale(0.1,0.1);
    },
    red: (ctx) => {
        ctx.scale(10,10);
        drawSvgPath(ctx, svgPathToCommands("m 9.5,12\
        c -4.977882,0.4564 -4.575773,-2.55877 -3.712077,-4.42968\
        c 4.977884,-0.45641 4.576419,2.55877 3.712077,4.42968\
        m -2.613065,-7.8864 \
        c -0.479686,0 -0.851411,0.95096 -1.098367,1.85992\
        c -6.351649,1.72868 -4.838243,9.48513 2.613067,9.48384\
        c 0.479687,0 0.850765,-0.95098 1.098365,-1.86056\
        c 6.351007,-1.7274 4.836947,-9.48449 -2.613065,-9.4832 z"));
        ctx.scale(0.1,0.1);
    },
    diamond: (ctx) => {
        const w = 70;
        const h = 80;

        // Expected bounding box requires these offsets
        const offsetX = 75 - w;
        const offsetY = 100 - h;
        const points = [
            [1, 0],
            [2, 1],
            [1, 2],
            [0, 1],
        ].map((point) => [(point[0] * w) + offsetX, (point[1] * h) + offsetY]);
        const curveX = 1.46;
        const curveY = 0.6;
        const interps = [
            [0, 0],
            [0, 1],
            [1, 1],
            [1, 0],
        ].map((v) => [
            ([curveX, 2 - curveX][v[0]] * w) + offsetX,
            ([curveY, 2 - curveY][v[1]] * h) + offsetY,
        ]);

        ctx.beginPath();
        ctx.moveTo(...points[0]);
        ctx.quadraticCurveTo(...interps[0], ...points[1]);
        ctx.quadraticCurveTo(...interps[1], ...points[2]);
        ctx.quadraticCurveTo(...interps[2], ...points[3]);
        ctx.quadraticCurveTo(...interps[3], ...points[0]);
        ctx.closePath();
    },

    club: (ctx) => {
        ctx.beginPath();
        ctx.moveTo(50, 180);
        ctx.lineTo(100, 180);
        ctx.quadraticCurveTo(80, 140, 75, 120);
        ctx.arc(110, 110, 35, 2.6779, 4.712, true);
        ctx.arc(75, 50, 35, 1, 2.1416, true);
        ctx.arc(40, 110, 35, 4.712, 0.4636, true);
        ctx.quadraticCurveTo(70, 140, 50, 180);
        ctx.closePath();
    },

    star: (ctx) => {
        // From: https://stackoverflow.com/questions/25837158/how-to-draw-a-star-by-using-canvas-html5
        let rot = Math.PI / 2 * 3;
        const cx = 75;
        const cy = 100;
        const outerRadius = 75;
        const innerRadius = 30;
        const step = Math.PI / 5;

        ctx.beginPath();
        ctx.moveTo(cx, cy - outerRadius);
        for (let i = 0; i < 5; i++) {
            const x1 = cx + (Math.cos(rot) * outerRadius);
            const y1 = cy + (Math.sin(rot) * outerRadius);
            ctx.lineTo(x1, y1);
            rot += step;

            const x2 = cx + (Math.cos(rot) * innerRadius);
            const y2 = cy + (Math.sin(rot) * innerRadius);
            ctx.lineTo(x2, y2);
            rot += step;
        }
        ctx.lineTo(cx, cy - outerRadius);
        ctx.closePath();
    },

    heart: (ctx) => {
        ctx.beginPath();
        ctx.moveTo(75, 65);
        ctx.bezierCurveTo(75, 57, 70, 45, 50, 45);
        ctx.bezierCurveTo(20, 45, 20, 82, 20, 82);
        ctx.bezierCurveTo(20, 100, 40, 122, 75, 155);
        ctx.bezierCurveTo(110, 122, 130, 100, 130, 82);
        ctx.bezierCurveTo(130, 82, 130, 45, 100, 45);
        ctx.bezierCurveTo(85, 45, 75, 57, 75, 65);
        ctx.closePath();
    },

    crescent: (ctx) => {
        ctx.beginPath();
        ctx.arc(75, 100, 75, 3, 4.3, true);
        ctx.arc(48, 83, 52, 5, 2.5, false);
        ctx.closePath();
    },

    flower: (ctx) => {
        ctx.text = '✿';
        ctx.font = '190px Verdana';
        ctx.textX = -10;
        ctx.textY = 155;
    },

    spade: (ctx) => {
        ctx.beginPath();
        ctx.moveTo(50, 180);
        ctx.lineTo(100, 180);
        ctx.quadraticCurveTo(80, 140, 75, 120);
        ctx.arc(110, 110, 35, 2.6779, 5.712, true);
        ctx.lineTo(75, 0);
        ctx.arc(40, 110, 35, 3.712, 0.4636, true);
        ctx.quadraticCurveTo(70, 140, 50, 180);
        ctx.closePath();
    },

    number_sign: (ctx) => {
        ctx.text = '#';
        ctx.font = '190px Verdana';
        ctx.textX = -3;
        ctx.textY = 170;
    },

    circle: (ctx) => {
        ctx.beginPath();
        ctx.arc(75, 100, 75, 0, 2 * Math.PI);
        ctx.closePath();
    },

    tensor_symbol: (ctx) => {
        ctx.text = '⊗';
        ctx.font = '170px Verdana';
        ctx.textX = -9;
        ctx.textY = 150;
    },

    infinity: (ctx) => {
        ctx.text = '∞';
        ctx.font = '175px Verdana';
        ctx.textX = -10;
        ctx.textY = 155;
    },

    null_symbol: (ctx) => {
        ctx.text = '∅';
        ctx.font = '210px Verdana';
        ctx.textX = 10;
        ctx.textY = 165;
    },

    rainbow: (ctx) => {
        ctx.beginPath();
        ctx.moveTo(0, 140);
        ctx.arc(75, 140, 75, Math.PI, 0, false);
        ctx.lineTo(125, 140);
        ctx.arc(75, 140, 25, 0, Math.PI, true);
        ctx.lineTo(0, 140);
        ctx.closePath();
    },
};

export default (ctx, suit, shadow, deckBack) => {
    // Each suit has a shape defined in the "suits.json" file (as the "pip" property)
    // Draw the respective shape on the canvas
    // (or, for text pips, define the type of text)
    shapeFunctions[suit.pip](ctx);

    // Some pips are canvas line drawings and some pips are text characters
    const isTextShape = textShapes.includes(suit.pip);

    // Determine the fill
    if (deckBack) {
        // Pips on the back of the deck should be gray
        ctx.fillStyle = '#444444';
    } else if (suit.fill === 'multi') {
        // Rainbow and omni cards have a gradient fill
        ctx.fillStyle = evenRadialGradient(ctx, suit.fillColors, [75, 150, 25, 75, 150, 75]);
    } else {
        // All other suits have a solid fill
        ctx.fillStyle = suit.fill;
    }

    // Fill in the shape
    if (shadow) {
        ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
    }
    if (isTextShape) {
        ctx.fillText(ctx.text, ctx.textX, ctx.textY);
    } else {
        ctx.fill();
    }

    // Draw a black border around the shape
    ctx.lineWidth = deckBack ? 8 : 5;
    if (shadow) {
        ctx.shadowColor = 'rgba(0, 0, 0, 0)';
    }
    if (isTextShape) {
        ctx.strokeText(ctx.text, ctx.textX, ctx.textY);
    } else {
        ctx.stroke();
    }
};

// Generates a radial gradient that is evenly distributed between its component colors
const evenRadialGradient = (ctx, colors, args) => {
    const grad = ctx.createRadialGradient(...args);
    for (let i = 0; i < colors.length; ++i) {
        grad.addColorStop(i / (colors.length - 1), colors[i]);
    }
    return grad;
};
