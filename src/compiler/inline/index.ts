import { IInline } from "../../types/inlineTypes";
import Heading from "./heading";
import Points from "./points";

export default function Inline(requestArray: string[]): IInline[] {
    const inlineConstuctor: IInline[] = [];

    for (let str of requestArray) {
        if (str[0] == "#") {
            inlineConstuctor.push(Heading(str))
        }
        else if (str[0] == "*") {
            inlineConstuctor.push(Points(str))
        }
        else {
            inlineConstuctor.push({
                text: str,
                fontSize: 12
            })
        }
    }

    return inlineConstuctor
}