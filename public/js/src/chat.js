/*
    Users can chat in the lobby, in the pregame, and in a game
*/

// Imports
import linkifyHtml from 'linkifyjs/html';
import globals from './globals';
import emojis from './data/emojis';
import emoteCategories from './data/emotes';

// Variables
let chatLineNum = 1;

export const init = () => {
    $('#lobby-chat-input').on('input', input);
    $('#lobby-chat-input').on('keypress', keypress('lobby'));
    $('#lobby-chat-pregame-input').on('input', input);
    $('#lobby-chat-pregame-input').on('keypress', keypress('table'));
    $('#game-chat-input').on('input', input);
    $('#game-chat-input').on('keypress', keypress('table'));

    // Ensure that there are no overlapping emotes
    const emoteMap = {};
    for (const category of Object.keys(emoteCategories)) {
        for (const emote of emoteCategories[category]) {
            if (emoteMap[emote]) {
                throw new Error('Duplicate emote found:', emote);
            } else {
                emoteMap[emote] = true;
            }
        }
    }
};

const input = function input(event) {
    // Check for emoji substitution
    // e.g. :100: --> 💯
    const text = $(this).val();
    const matches = text.match(/:[^\s]+:/g); // "[^\s]" is a non-whitespace character
    if (matches) {
        for (let match of matches) {
            match = match.slice(1, -1); // Strip off the colons
            const emoji = emojis[match];
            if (emoji) {
                $(this).val(text.replace(`:${match}:`, emoji));
                event.preventDefault();
                return;
            }
        }
    }
};

const keypress = (room) => function keypressFunction(event) {
    // Check for submission
    if (event.key !== 'Enter') {
        return;
    }

    const msg = $(this).val();
    if (!msg) {
        return;
    }

    // Clear the chat box
    $(this).val('');

    // Use "startsWith" instead of "===" to work around an unknown bug where
    // the room can already have the table number appended (e.g. "table123")
    if (room.startsWith('table')) {
        room = `table${globals.tableID}`;
    }

    globals.conn.send('chat', {
        msg,
        room,
    });
};

export const add = (data, fast) => {
    let chat;
    if (data.room === 'lobby') {
        chat = $('#lobby-chat-text');
    } else if ($('#lobby-chat-pregame-text').is(':visible')) {
        chat = $('#lobby-chat-pregame-text');
    } else {
        chat = $('#game-chat-text');
    }

    // Linkify any links
    data.msg = linkifyHtml(data.msg, {
        target: '_blank',
    });

    // Convert emotes to images
    data.msg = fillDiscordEmotes(data.msg);
    data.msg = fillLocalEmotes(data.msg);

    // Get the hours and minutes from the time
    const datetime = new Intl.DateTimeFormat(
        undefined,
        {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        },
    ).format(new Date(data.datetime));

    let line = `<span id="chat-line-${chatLineNum}" class="${fast ? '' : 'hidden'}">[${datetime}]&nbsp; `;
    if (data.server) {
        line += data.msg;
    } else if (data.who) {
        line += `&lt;<strong>${data.who}</strong>&gt;&nbsp; `;
        line += data.msg;
    } else {
        line += data.msg;
    }
    line += '</span><br />';

    // Find out if we should automatically scroll down after adding the new line of chat
    // https://stackoverflow.com/questions/6271237/detecting-when-user-scrolls-to-bottom-of-div-with-jquery
    // If we are already scrolled to the bottom, then it is ok to automatically scroll
    let autoScroll = false;
    if (chat.scrollTop() + Math.ceil(chat.innerHeight()) >= chat[0].scrollHeight) {
        autoScroll = true;
    }

    // Add the new line and fade it in
    chat.append(line);
    $(`#chat-line-${chatLineNum}`).fadeIn(globals.fadeTime);
    chatLineNum += 1;

    // Automatically scroll down
    if (autoScroll) {
        chat.animate({
            scrollTop: chat[0].scrollHeight,
        }, (fast ? 0 : 500));
    }
};

// Discord emotes are in the form of:
// <:open_mouth:685452458054778884>
const fillDiscordEmotes = (message) => {
    let filledMessed = message;
    while (true) {
        const match = filledMessed.match(/&lt;:(.+?):(\d+?)&gt;/);
        if (!match) {
            break;
        }
        const emoteTag = `<img src="https://cdn.discordapp.com/emojis/${match[2]}.png" title="${match[1]}" height=28 />`;
        filledMessed = filledMessed.replace(match[0], emoteTag);
    }
    return filledMessed;
};

const fillLocalEmotes = (message) => {
    let filledMessed = message;

    // Search through the text for each emote
    for (const category of Object.keys(emoteCategories)) {
        for (const emote of emoteCategories[category]) {
            // We don't want to replace the emote if it is followed by a quote,
            // because we don't want to replace Discord emoptes
            const index = message.indexOf(emote);
            if (index !== -1 && message[index + emote.length] !== '"') {
                const re = new RegExp(`\\b${emote}\\b`, 'g'); // "\b" is a word boundary in regex
                const emoteTag = `<img class="chat-emote" src="/public/img/emotes/${category}/${emote}.png" title="${emote}" />`;
                filledMessed = filledMessed.replace(re, emoteTag);
            }
        }
    }

    // Also handle special emotes that do not match the filenames
    if (message.indexOf('&lt;3') !== -1) {
        const emoteTag = '<img class="chat-emote" src="/public/img/emotes/3.png" title="&lt;3" />';
        const re = new RegExp('&lt;3', 'g');
        message = message.replace(re, emoteTag);
    }

    return filledMessed;
};
