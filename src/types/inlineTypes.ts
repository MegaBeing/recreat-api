export interface IInline {
    text: string | IInline | IInline[];
    fontSize?: number;
    bold?: boolean;
    italics?: boolean;
    decoration?: string | string[];
    link?: string;
    color?: string;
}
