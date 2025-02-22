import { IInline } from "../../types/inlineTypes";

export default function Point(text: string, fontSize: number): IInline {
    return {
        text: ` • ${text}`,
        fontSize: fontSize
    }
}