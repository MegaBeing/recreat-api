import { IInline } from "../../types/inlineTypes"

export default function StrikeThrough(match: string,fontSize: number): IInline | null {
    const regex = /=(.*)=/
    const regexObject = regex.exec(match)
    if (regexObject) {
        return {
            text: regexObject[1],
            decoration: 'lineThrough',
            fontSize: fontSize
        }
    }
    return null
}