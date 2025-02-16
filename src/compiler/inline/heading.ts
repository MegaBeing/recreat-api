import { IInline } from "../../types/inlineTypes";

export default function Heading(text: string): IInline{
    return {
        text: text,
        fontSize: 25, 
        bold: true
    }
}