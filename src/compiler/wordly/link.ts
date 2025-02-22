import { IInline } from "../../types/inlineTypes";

export default function Link(match: string, fontSize: number): IInline | null {
    const regex = /\[(.+)\]\((\w+)\)/
    const regexObject = regex.exec(match)
    if (regexObject) {
        return {
            text: regexObject[1],
            link: regexObject[2],
            fontSize: fontSize
        }
    }
    return null;
}