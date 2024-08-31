import { Node } from "./tt2";
import { parse } from "./parser";
import { print, embed, getVisitorKeys } from "./printer";
import {
	Parser,
	Printer,
	SupportLanguage,
	SupportOptions,
	ParserOptions,
} from "prettier";

const PLUGIN_KEY = "tt2-template";

export const languages: SupportLanguage[] = [
	{
		name: "TT2Template",
		parsers: [PLUGIN_KEY],
		extensions: [".tt", ".tt2", ".ttml", ".html"],
		vscodeLanguageIds: ["tt2"],
	},
];

export const parsers = {
	[PLUGIN_KEY]: <Parser<Node>>{
		astFormat: PLUGIN_KEY,
		parse,
		locStart: (node) => node.index,
		locEnd: (node) => node.index + node.length,
	},
};

export const printers = {
	[PLUGIN_KEY]: <Printer<Node>>{
		print,
		embed,
		getVisitorKeys,
	},
};

export type extendedOptions = ParserOptions<Node> & {
	quoteAttributes: boolean;
};

export const options: SupportOptions = {};
