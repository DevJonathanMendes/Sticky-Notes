import { useState } from "react";
import NoteHeader from "./NoteHeader";
import NoteList from "./NoteList";
import NoteSelected from "./NoteSelected";
import "./notes.css";

interface INote extends Object {
    id: string,
    text: string,
    selected: true | false
};

const stickyNotesMock: INote[] = [{
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

const Notes = () => {
    const [notes, setNotes] = useState(stickyNotesMock);

    const selectNote = (id) => {
        setNotes(notes => notes.map(note => {
            note.id === id
                ? note.selected = true
                : note.selected = false;

            return note;
        }));
    };

    const updateNote = (id, text) => {
        const upNote = { id, text, selected: true };
        setNotes([upNote, ...notes.filter(note => note.id !== id)]);
    };

    const deleteNote = (id) => {
        setNotes(notes => notes.filter(note => note.id !== id));
    };

    return (
        <div className="notes">
            <div className="notes-list">
                <NoteHeader />
                <NoteList notes={notes} deleteNote={deleteNote} selectNote={selectNote} />
            </div>
            <NoteSelected notes={notes} onChange={updateNote} />
        </div >
    );
};

export default Notes;
