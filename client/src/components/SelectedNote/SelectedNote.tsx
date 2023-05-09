import { useEffect, useRef } from "react";
import { ISelectedNote } from "../../interfaces/ISelectedNote";
import Colors from "../Colors/Colors";

import "./SelectedNote.css";

const NoteSelected: ISelectedNote = (props) => {
    const note = props.notes.filter(note => note.selected)[0];

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
        props.updateNote(note.id, e.target.value);

    const textareaRef = useRef(null);

    useEffect(() => {
        note && textareaRef.current.focus();
    });

    return note ?
        <div className="note">
            <div className={`container-colors ${note.color}`}>
                <Colors style="note-colors"
                    note={note}
                    onClick={props.setNewColor}
                />
            </div>
            <div className="container-textarea">
                <textarea onChange={handleChange}
                    ref={textareaRef}
                    placeholder="Write a note..."
                    value={note.text}
                />
            </div>
        </div> : <></>;
};

export default NoteSelected;
