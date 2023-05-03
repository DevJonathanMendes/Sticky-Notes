import { IPropsNoteSelected } from "../../interfaces/INotes";
import Colors from "../Colors/Colors";

import "./Note.css";

const NoteSelected = (props: IPropsNoteSelected) => {
    const note = props.notes.filter(note => note.selected)[0];

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
        props.updateNote(note.id, e.target.value);

    return note ?
        <div>
            <div className={`container-colors ${note.color}`}>
                <Colors
                    style="note-colors"
                    note={note}
                    onClick={props.setNewColor}
                />
            </div>
            <textarea
                onChange={handleChange}
                placeholder="Write a note..."
                value={note.text}
            />
        </div> : null;
};

export default NoteSelected;
