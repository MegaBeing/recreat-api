import { IInline } from "../../types/inlineTypes";
import { Regex, wordlyMatch } from "./utils";

export default function Inline(requestArray: string[], fontSize: number): IInline[] {
    let wordlyConstructor: IInline[] = [];
    let regexArray = Object.values(Regex);
    let regex = new RegExp(regexArray.join('|'), 'g');
    requestArray.forEach((ele) => {
        let str = ele;
        let m;
        while ((m = regex.exec(str as string)) !== null) {
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }
            m.forEach((match) => {
                let Match = wordlyMatch(match, fontSize)
                if (Match) {
                    wordlyConstructor.push(Match)
                }
            });
        }
    })
    return (
        wordlyConstructor
    )
}