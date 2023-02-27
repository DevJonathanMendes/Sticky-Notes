import { useState } from "react";
import randomId from "../../utils/randomId";
import NoteHeader from "./NoteHeader";
import NoteSelected from "./NoteSelected";
import "./notes.css";

interface INote extends Object {
    id: string,
    color: string,
    text: string,
    selected: true | false,
    search: true | false
};

const stickyNotesMock: INote[] = [{
    id: "a0",
    color: "yellow",
    text: "Sticky Note 0",
    selected: false,
    search: true
}, {
    id: "a1",
    color: "red",
    text: "Sticky Note 1",
    selected: false,
    search: true
}, {
    id: "a3",
    color: "green",
    text: "Sticky Note 2",
    selected: false,
    search: true
}, {
    id: "a4",
    color: "yellow",
    text: "Sticky Note 3",
    selected: false,
    search: true
}];

const Notes = () => {
    const [notes, setNotes] = useState(stickyNotesMock);

    const searchNote = (searchText: string) => {
        setNotes(notes => notes.map(note => {
            const text = note.text.toLowerCase();
            searchText = searchText.toLowerCase();

            text.indexOf(searchText) === -1
                ? note.search = false
                : note.search = true;

            return note;
        }));
    };

    const createNote = (color: string) => {
        const newNote = {
            id: randomId(),
            color: color,
            text: "",
            selected: true,
            search: true
        };

        setNotes([newNote, ...notes]);
        readNote(newNote.id);
    };

    const readNote = (id: string) => {
        deleteNoteNull();
        setNotes(notes => notes.map(note => {
            note.id === id
                ? note.selected = true
                : note.selected = false;

            return note;
        }));
    };

    const updateNote = (id: string, text: string) => {
        if (text.length < 256) {
            setNotes(notes => notes.map(note => {
                if (note.id === id)
                    note.text = text;

                return note;
            }));
        };
    };

    const deleteNote = (id: string) => {
        setNotes(notes => notes.filter(note => note.id !== id));
    };

    const deleteNoteNull = () => {
        setNotes(notes => notes.filter(({ text, selected }) =>
            text.trim().length > 0 || selected
        ));
    };

    return (
        <div className="notes">
            <NoteHeader
                notes={notes}
                searchNote={searchNote}
                createNote={createNote}
                readNote={readNote}
                deleteNote={deleteNote}
            />
            <NoteSelected notes={notes} updateNote={updateNote} />
        </div >
    );
};

export default Notes;
