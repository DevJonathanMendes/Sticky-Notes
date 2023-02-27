import { useState } from "react";
import NoteList from "./NoteList";

const NoteHeader = (props) => {
    const { notes, createNote, readNote, deleteNote, searchNote } = props;

    return (
        <div className="notes-list">
            <header className="notes-list-header">
                <h2>Sticky Notes</h2>
                <input
                    type="search"
                    className="notes-list-header-input"
                    onChange={(e) => searchNote(e.target.value)}
                    placeholder="Research..."
                />
                <div className="icons-color">
                    <button className="icon-color yellow" onClick={() => createNote("yellow")} />
                    <button className="icon-color red" onClick={() => createNote("red")} />
                    <button className="icon-color green" onClick={() => createNote("green")} />
                </div>
            </header>
            <NoteList notes={notes} deleteNote={deleteNote} readNote={readNote} />
        </div>
    );
};

export default NoteHeader;
