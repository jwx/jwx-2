export default {
    "new": {
        description: "Creates a new Aurelia 2 app. It uses makes [https://makes.js.org] for scaffolding.",
        args: [
            { '<app-name>': "Name of your app (and folder)", },
            { 'shortcut list': "A long list of short cuts which will be presented after first run" },
        ],
    },
    "localize": {
        description: "Installs the jwx-2 CLI in your current project, making 'npx jwx-2' be faster.",
        args: [],
    },
    "globalize": {
        description: "Installs the jwx-2 CLI globally, meaning the 'npx' can be left out.",
        args: [],
    },
    "build": {
        description: "Builds the app.",
        args: [],
    },
    "help": {
        description: "Show help about commands.",
        args: [
            { '<command>': "Show the help for a specific <command>.", },
        ],
    },
};
