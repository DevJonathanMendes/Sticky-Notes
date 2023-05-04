import { INote } from "./INotes";

interface props {
    notes: INote[],
    updateNote: (id: string, text: string) => void,
    setNewColor: (color: string, id?: string) => void
};

export type ISelectedNote = (props: props) => JSX.Element;
