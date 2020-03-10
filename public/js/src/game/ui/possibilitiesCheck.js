// Imports
import globals from './globals';

// Return whether or not the "card possibilities" feature should be turned on
export default () => (
    !globals.lobby.settings.realLifeMode
    && !globals.speedrun
    && !globals.variant.name.startsWith('Hidden Board')
);
