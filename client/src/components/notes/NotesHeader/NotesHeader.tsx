import { IPropsNoteHeader } from "../../../interfaces/interfaceNotes";
import NoteList from "../NotesList/NotesList";

import "./NotesHeader.css";

const NoteHeader = (props: IPropsNoteHeader) => {
    const { notes, createNote, readNote, deleteNote, searchNote } = props;

    return (
        <div className="notes-header">
            <header>
                <h1>Sticky Notes</h1>
                <input
                    type="search"
                    onChange={(e) => searchNote(e.target.value)}
                    placeholder="Research..."
                />
                <div className="icons-color">
                    <button className="yellow" onClick={() => createNote("yellow")} />
                    <button className="red" onClick={() => createNote("red")} />
                    <button className="green" onClick={() => createNote("green")} />
                </div>
            </header>
            <NoteList notes={notes} deleteNote={deleteNote} readNote={readNote} />
        </div>
    );
};

export default NoteHeader;
