import { IInline } from "../../types/inlineTypes";

export default function Italic(match: string, fontSize: number): IInline | null {
    const regex = /_.+_/
    const regexObject = regex.exec(match)
    if (regexObject) {
        return {
            text: regexObject[1],
            italics: true,
            fontSize: fontSize
        }
    }
    return null
}