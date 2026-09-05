import packageJson from "../../package.json";

import { history } from "../stores/history";

const hostname = window.location.hostname;

export const commands: Record<string, (args: string[]) => Promise<string> | string> = {
	help: (args) => {
		return "Available commands: help, about, projects";
	},

	about: (args) => {
		return "Welcome to ALTENOVO!";
	},

	projects: async (args) => {
		return "Loading projects...";
	},

	banner: () => `
     █████╗ ██╗   ████████╗███████╗███╗   ██╗ ██████╗ ██╗   ██╗ ██████╗
    ██╔══██╗██║   ╚══██╔══╝██╔════╝████╗  ██║██╔═══██╗██║   ██║██╔═══██╗
    ███████║██║      ██║   █████╗  ██╔██╗ ██║██║   ██║██║   ██║██║   ██║
    ██╔══██║██║      ██║   ██╔══╝  ██║╚██╗██║██║   ██║██║   ██║██║   ██║
    ██║  ██║███████╗ ██║   ███████╗██║ ╚████║╚██████╔╝╚██████╔╝╚██████╔╝
    ╚═╝  ╚═╝╚══════╝ ╚═╝   ╚══════╝╚═╝  ╚═══╝ ╚═════╝  ╚═════╝  ╚═════╝ v${packageJson.version}

    Type 'help' to see list of available commands.
    `,
    clear: () => {
        history.set([]);

        return "";
    },
        
};
