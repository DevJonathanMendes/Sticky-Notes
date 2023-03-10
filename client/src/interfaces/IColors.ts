import { INote } from "./INotes";

interface IColors {
    style?: string,
    note?: INote,
    onClick: (color: string, id?: string) => void
};

export type { IColors };
