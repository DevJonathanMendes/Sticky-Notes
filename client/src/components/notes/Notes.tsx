import { useState } from "react";
import { INote } from "../../interfaces/INotes";
import randomId from "../../utils/randomId";
import NoteHeader from "./NotesHeader/NotesHeader";
import NoteSelected from "./NotesSelected/NotesSelected";

import "./Notes.css";

const Notes = () => {
    const [notes, setNotes] = useState<INote[]>([]);

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
