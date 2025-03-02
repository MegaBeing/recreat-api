import { IInline } from "../types/inlineTypes";
import Inline from "./inline";
import Wordly from "./wordly";

export default function Compiler(requestBody: any) {
    const requestStr: string = requestBody.string;
    const requestArray: string[] = requestStr.split('\n');
    const fontSize: number = requestBody.fontSize
    const inlineContent: IInline[] = Inline(requestArray, fontSize)
    const wordlyContent: IInline[] = Wordly(inlineContent, fontSize)
    let responseBody = {
        content: wordlyContent,
    }
    return responseBody
}