import { useState } from "react";
import "./notes.css";

const stickyNotesMock = [{
    id: "a0",
    text: "Sticky Note 0"
}, {
    id: "a1",
    text: "Sticky Note 1"
}, {
    id: "a3",
    text: "Sticky Note 2"
}, {
    id: "a4",
    text: "Sticky Note 3"
}];

const Notes = () => {
    const [notes, setNotes] = useState(stickyNotesMock);
    const [noteSelected, setNoteSelected] = useState("");

    return (
        <div className="notes">
            <div className="notes-list">
                <header className="notes-list-header">
                    <h2>Sticky Notes</h2>
                    <input className="notes-list-input" type="search" placeholder="Research..." />
                    <button onClick={() => { }}>ADD</button>
                </header>

                <div className="notes-list-container">
                    <ul>{notes.map(({ id, text }) =>
                        <li key={id} className="notes-list-item" onClick={() => setNoteSelected(id)}>
                            <p className="notes-list-item-text">{text}</p>
                        </li>
                    )}</ul>
                </div>
            </div>
            <div className="note">{
                notes.map(({ id, text }) =>
                    id === noteSelected && <p className="note-text">{text}</p>)
            }</div>
        </div >
    );
};

export default Notes;
