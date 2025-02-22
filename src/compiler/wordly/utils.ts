import { IInline } from "../../types/inlineTypes";
import Bold from "./bold";
import Italic from "./italic";
import Link from "./link";
import StrikeThrough from "./strikeThrough";
import Underline from "./underline";

export const Regex: Record<string, string> = {
    'link': '\\[.+\\]\\(\\w+\\)',
    'bold': '\\*\\*.+\\*\\*',
    'strikeThrough': '=.+=',
    'underline': '__.+__',
    'italic': '_.+_',
};
export const normal = '([A-Za-z]+(?:\\s+[A-Za-z]+)*)'
export const functionServer: Record<string, (match: string, fontSize: number) => IInline | null> = {
    link: Link,
    bold: Bold,
    strikeThrough: StrikeThrough,
    underline: Underline,
    italic: Italic
};

export function wordlyMatch(match: string, fontSize: number): IInline | null {
    let wordKey: string[] = Object.keys(functionServer)
        .filter((key: string) =>
            key in Regex && new RegExp(Regex[key as keyof typeof Regex]).test(match)
        );

    if (wordKey.length > 0) {
        return functionServer[wordKey[0]](match, fontSize);
    }

    return {
        text: match,
        fontSize: fontSize
    }
}