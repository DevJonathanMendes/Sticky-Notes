import { useEffect, useRef } from "react";
import { ISelectedNote } from "../../interfaces/ISelectedNote";
import Colors from "../Colors/Colors";

import "./SelectedNote.css";

const NoteSelected: ISelectedNote = (props) => {
    const note = props.notes.filter(note => note.selected)[0];

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
        props.updateNote(note.id, e.target.value);

    const ref = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (ref.current && note.selected)
            ref.current.focus();
    }, [note]);

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
                    ref={ref}
                    placeholder="Write a note..."
                    value={note.text}
                />
            </div>
        </div> : <></>;
};

export default NoteSelected;
