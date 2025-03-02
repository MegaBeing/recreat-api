import { IInline } from "../../types/inlineTypes";

export default function Point(text: string, fontSize: number): IInline {
    return {
        text: `• ${text.substring(2)}`,
        fontSize: fontSize
    }
}