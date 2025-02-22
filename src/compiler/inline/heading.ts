import { IInline } from "../../types/inlineTypes";

export default function Heading(text: string, fontSize: number): IInline {
    return {
        text: text,
        fontSize: fontSize * 1.2,
        bold: true
    }
}