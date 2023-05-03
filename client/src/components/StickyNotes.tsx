import { useState } from "react";
import Colors from "./Colors/Colors";

import { INote } from "../interfaces/INotes";
import randomId from "../utils/randomId";
import NoteHeader from "./NotesHeader/NotesHeader";
import NoteList from "./NotesList/NotesList";
import Note from "./Note/Note";
import ManipulateLocalStorage from "../utils/ManipulateLocalStorage";

import "./StickyNotes.css";

const localStorageNotes = new ManipulateLocalStorage("notes");

const Notes = () => {
    const [notes, setNotes] = useState<INote[]>(localStorageNotes.readItem());

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
        const newNote: INote = {
            id: randomId(),
            color: color,
            text: "",
            date: new Date().toISOString(),
            selected: true,
            search: true
        };

        localStorageNotes.createItem(newNote);
        setNotes([newNote, ...notes]);
        readNote(newNote.id);
    };

    const readNote = (id: string) => {
        setNotes(notes => notes.map(note => {
            note.id === id
                ? note.selected = true
                : note.selected = false;

            localStorageNotes.updateItem(note);
            return note;
        }));
        deleteNoteNull();
    };

    const updateNote = (id: string, text: string) => {
        if (text.length < 256) {
            setNotes(notes => notes.map(note => {
                if (note.id === id) {
                    note.date = new Date().toISOString();
                    note.text = text;
                };

                localStorageNotes.updateItem(note);
                return note;
            }));
        };
    };

    const deleteNote = (id: string) => {
        localStorageNotes.deleteItem(id);
        setNotes(notes => notes.filter(note => note.id !== id));
    };

    const deleteNoteNull = () => {
        setNotes(notes => notes.filter(note => {
            if (note.text.trim().length > 0 || note.selected)
                return note;

            localStorageNotes.deleteItem(note.id);
        }));
    };

    const setNewColor = (color: string, id?: string) => {
        setNotes(notes => notes.map(note => {
            if (note.id === id) {
                note.color = color;
                localStorageNotes.updateItem(note);
            };

            return note;
        }));
    };

    return (
        <div className="StickyNotes">
            <div className="notes">
                <NoteHeader notes={notes}
                    searchNote={searchNote} createNote={createNote}
                    readNote={readNote} deleteNote={deleteNote}
                />
                <Colors
                    onClick={createNote}
                />
                <NoteList notes={notes}
                    deleteNote={deleteNote}
                    readNote={readNote}
                />
            </div>
            <div className="note">
                <Note notes={notes}
                    updateNote={updateNote}
                    setNewColor={setNewColor}
                />
            </div>
        </div >
    );
};

export default Notes;
