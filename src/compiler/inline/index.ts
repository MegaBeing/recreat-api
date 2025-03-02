import { IInline } from "../../types/inlineTypes";
import { Regex, inlineMatch, normal } from "./utils";

export default function Inline(requestArray: string[], fontSize: number): IInline[] {
    let wordlyConstructor: IInline[] = [];
    let regexArray = Object.values(Regex);
    let markDown = regexArray.join('|');
    let regex = new RegExp(`(?:${markDown})|${normal}`, 'g')
    requestArray.forEach((ele) => {
        let str = ele;
        let m;
        while ((m = regex.exec(str as string)) !== null) {
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }
            let Match = inlineMatch(m[0], fontSize)
            if (Match) {
                wordlyConstructor.push(Match)
            }
        }
    })
    return (
        wordlyConstructor
    )
}