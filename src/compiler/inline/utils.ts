import { IInline } from "../../types/inlineTypes";
import Heading from "./heading";
import Point from "./point";

export const Regex = {
    heading: "^#\\s+.+",
    point: "^\\*\\s+.+",
};

export const functionServer: Record<string, (match: string, fontSize: number) => IInline | null> = {
    heading: Heading,
    point: Point
};

export function wordlyMatch(match: string, fontSize: number): IInline | null {
    let wordKey: string[] = Object.keys(functionServer)
        .filter((key: string) =>
            key in Regex && new RegExp(Regex[key as keyof typeof Regex]).test(match)
        );

    if (wordKey.length > 0 && wordKey[0] != 'normal') {
        return functionServer[wordKey[0]](match, fontSize);
    }

    return {
        text: match
    }
}