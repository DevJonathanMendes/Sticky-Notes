import { INote } from "./INotes";

interface props {
    notes: INote[],
    readNote: (id: string) => void,
    deleteNote: (id: string) => void
};

export type IListNotes = (props: props) => JSX.Element;
