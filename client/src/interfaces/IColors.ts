import { INote } from "./INotes";

interface props {
    style?: string,
    note?: INote,
    onClick: (color: string, id?: string) => void
};

export type IColors = (props: props) => JSX.Element;
