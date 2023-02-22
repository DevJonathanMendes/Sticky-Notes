import { useState } from "react";
import "./notes.css";

const stickyNotesMock = [{
    id: "a0",
    text: "Sticky Note 0",
    selected: false
}, {
    id: "a1",
    text: "Sticky Note 1",
    selected: false
}, {
    id: "a3",
    text: "Sticky Note 2",
    selected: false
}, {
    id: "a4",
    text: "Sticky Note 3",
    selected: false
}];

const NotesHeader = () => {
    return (
        <header className="notes-list-header">
            <h2>Sticky Notes</h2>
            <input
                type="search"
                className="notes-list-header-input"
                placeholder="Research..."
            />
        </header>
    );
};

const NotesList = () => {
    return (
        <div className="notes-list-container">
            <ul>
                <li className="notes-list-item">
                    <p className="notes-list-item-text">Note</p>
                </li>
            </ul>
        </div>
    );
};

const NoteSelected = () => {
    return (
        <div className="note">
            <div className="note-text">
                <textarea defaultValue="A selected note." />
            </div>
        </div>
    );
};

const Notes = () => {
    const [notes, setNotes] = useState(stickyNotesMock);

    return (
        <div className="notes">
            <div className="notes-list">
                <NotesHeader />
                <NotesList />
            </div>
            <NoteSelected />
        </div >
    );
};

export default Notes;
