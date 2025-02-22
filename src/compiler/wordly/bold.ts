import { IInline } from "../../types/inlineTypes";

export default function Bold(match: string, fontSize: number): IInline | null {
    const regex = /\*\*(.+)\*\*/
    const regexObject = regex.exec(match)
    if (regexObject) {
        return {
            text: regexObject[1],
            bold: true,
            fontSize: fontSize
        }
    }
    return null
}