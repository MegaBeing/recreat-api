import { IInline } from "../../types/inlineTypes";
import { Regex, wordlyMatch } from "./utils";

export default function Wordly(content: IInline[], fontSize: number): IInline[] {
    let wordlyConstructor: IInline[] = [];
    let regexArray = Object.values(Regex);
    let regex = new RegExp(regexArray.join('|'), 'g');

    content.forEach((ele) => {
        let constructor: IInline[] = [];
        let str = ele.text;
        let m;
        while ((m = regex.exec(str as string)) !== null) {
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }
            m.forEach((match) => {
                let Match = wordlyMatch(match, fontSize)
                if (Match) {
                    constructor.push(Match)
                }
            });
        }
        wordlyConstructor.push({
            text: constructor
        })
    })
    return (
        wordlyConstructor
    )
}