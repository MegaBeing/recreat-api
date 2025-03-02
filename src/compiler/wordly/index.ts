import { IInline } from "../../types/inlineTypes";
import { normal, Regex, wordlyMatch } from "./utils";

export default function Wordly(content: IInline[], fontSize: number): IInline[] {
    let wordlyConstructor: IInline[] = [];
    let markDown = Object.values(Regex).join('|')
    let regex = new RegExp(`(?:${markDown})|${normal}`, 'g')
    console.log(regex)
    content.forEach((ele) => {
        let constructor: IInline[] = [];
        let str = ele.text;
        let m;
        while ((m = regex.exec(str as string)) !== null) {
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }
            let Match = wordlyMatch(m[0], ele.fontSize ? ele.fontSize : fontSize)
            if (Match) {
                constructor.push({ ...Match, text: ` ${Match.text} ` })
            }
        }
        wordlyConstructor.push({
            text: constructor,
            fontSize: ele.fontSize,
            bold: ele.bold
        })
    })
    return (
        wordlyConstructor
    )
}