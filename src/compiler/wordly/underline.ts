import { IInline } from "../../types/inlineTypes";

export default function Underline(match: string, fontSize: number): IInline | null {
    const regex = /__(.+)__/
    const regexObject = regex.exec(match);
    if (regexObject) {
        return {
            text: regexObject[1],
            decoration: 'underline',
            fontSize: fontSize
        }
    }
    return null
}