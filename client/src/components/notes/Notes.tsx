import { useState } from "react";
import { INote } from "../../interfaces/INotes";
import randomId from "../../utils/randomId";
import NoteHeader from "./NotesHeader/NotesHeader";
import NoteSelected from "./NotesSelected/NotesSelected";

import "./Notes.css";

const localNotes: INote[] = [];

for (let indexItem = 0; indexItem < localStorage.length; indexItem++) {
    const keyNote: string = localStorage.key(indexItem) || "";
    const itemNoteStr = localStorage.getItem(keyNote) || "";
    const itemNoteObj = JSON.parse(itemNoteStr);

    localNotes.push(itemNoteObj);
};

const Notes = () => {
    const [notes, setNotes] = useState<INote[]>(localNotes);

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

        localStorage.setItem(newNote.id, JSON.stringify(newNote));
        setNotes([newNote, ...notes]);
        readNote(newNote.id);
    };

    const readNote = (id: string) => {
        setNotes(notes => notes.map(note => {
            note.id === id
                ? note.selected = true
                : note.selected = false;

            localStorage.setItem(note.id, JSON.stringify(note));
            return note;
        }));
        deleteNoteNull();
    };

    const updateNote = (id: string, text: string) => {
        if (text.length < 256) {
            const updateNote: INote = notes.filter(note => note.id === id)[0];
            updateNote.text = text;
            localStorage.setItem(id, JSON.stringify(updateNote));


            setNotes([updateNote, ...notes.filter(note => note.id !== id)]);
        };
    };

    const deleteNote = (id: string) => {
        localStorage.removeItem(id);
        setNotes(notes => notes.filter(note => note.id !== id));
    };

    const deleteNoteNull = () => {
        setNotes(notes => notes.filter(({ id, text, selected }) => {
            if (text.trim().length > 0)
                return true
            if (selected)
                return true

            localStorage.removeItem(id);
            return false;
        }
        ));
    };

    const setNewColor = (color: string, id: string | null) => {
        setNotes(notes => notes.map(note => {
            if (note.id === id) {
                note.color = color;
                localStorage.setItem(id, JSON.stringify(note));
            };

            return note;
        }));
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
            <NoteSelected
                notes={notes}
                updateNote={updateNote}
                setNewColor={setNewColor}
            />
        </div >
    );
};

export default Notes;
