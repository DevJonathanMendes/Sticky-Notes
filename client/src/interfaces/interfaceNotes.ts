interface INote {
    id: string,
    text: string,
    color: string,
    selected: true | false,
    search: true | false
};

interface IPropsNoteHeader {
    notes: INote[],
    createNote: (color: string) => void,
    readNote: (id: string) => void,
    deleteNote: (id: string) => void,
    searchNote: (eventInput: string) => void
}

interface IPropsNoteList {
    notes: INote[],
    readNote: (id: string) => void,
    deleteNote: (id: string) => void
}

interface IPropsNoteSelected {
    notes: INote[],
    updateNote: (id: string, text: string) => void
}

export type { INote, IPropsNoteHeader, IPropsNoteList, IPropsNoteSelected };