interface IColors {
    style?: string,
    noteId?: string
    onClick: (color: string, id: string | null) => void
};

export type { IColors };
