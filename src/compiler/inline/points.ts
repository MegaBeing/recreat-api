import { IInline } from "../../types/inlineTypes";

export default function Points(text:string): IInline{
    return {
        text: ` • ${text}`,
        fontSize: 15
    }
}