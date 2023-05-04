import { INote } from "../interfaces/INotes";
import ManipulateLocalStorage from "../utils/ManipulateLocalStorage";
import { useState } from "react";
import randomId from "../utils/randomId";
import SearchNote from "./SearchNote/SearchNote";
import Colors from "./Colors/Colors";
import ListNotes from "./ListNotes/ListNotes";
import SelectedNote from "./SelectedNote/SelectedNote";

import "./StickyNotes.css";

const localStorageNotes = new ManipulateLocalStorage("notes");

export default function StickyNotes(): JSX.Element {
    const [notes, setNotes] = useState<INote[]>(localStorageNotes.readItem());

    const searchNote = (searchText: string) => {
        setNotes(localStorageNotes.readItem().filter((note: INote) => {
            const text = note.text.toLowerCase();
            searchText = searchText.toLowerCase();

            if (text.indexOf(searchText) !== -1)
                return note;
        }));
    };

    const createNote = (color: string) => {
        const newNote: INote = {
            id: randomId(),
            color: color,
            text: "",
            date: new Date().toISOString(),
            selected: true
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
        if (text.length < 1024) {
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
            <div className="container-notes">
                <SearchNote searchNote={searchNote} />
                <Colors onClick={createNote} />
                <ListNotes notes={notes} deleteNote={deleteNote} readNote={readNote} />
            </div>
            <div className="container-note">
                <SelectedNote notes={notes}
                    updateNote={updateNote}
                    setNewColor={setNewColor}
                />
            </div>
        </div >
    );
};

