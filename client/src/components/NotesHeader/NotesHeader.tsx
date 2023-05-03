import { IPropsNoteHeader } from "../../interfaces/INotes";

import "./NotesHeader.css";

const NoteHeader = (props: IPropsNoteHeader) => {
    const { createNote, searchNote } = props;

    return (
        <header>
            <h1>Sticky Notes</h1>
            <input
                type="search"
                onChange={(e) => searchNote(e.target.value)}
                placeholder="Research..."
            />
        </header>
    );
};

export default NoteHeader;
