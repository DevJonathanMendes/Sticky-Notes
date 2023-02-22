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

const Notes = () => {
    const [notes, setNotes] = useState(stickyNotesMock);

    return (
        <div className="notes">
            <div className="notes-list">
                <NotesHeader />
                <div className="notes-list-container">
                    <ul>{
                        notes.map(({ id, text }) =>
                            <li key={id} className="notes-list-item">
                                <p className="notes-list-item-text">{text}</p>
                            </li>)
                    }</ul>
                </div>
            </div>
            <div className="note">
                <div className="note-text">
                    <textarea defaultValue="A selected note." />
                </div>
            </div>
        </div >
    );
};

export default Notes;
