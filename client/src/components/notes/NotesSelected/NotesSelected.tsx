import { IPropsNoteSelected } from "../../../interfaces/interfaceNotes";
import "./NotesSelected.css";

const NoteSelected = (props: IPropsNoteSelected) => {
    const note = props.notes.filter(note => note.selected)[0];

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
        props.updateNote(note.id, e.target.value);

    return note ?
        <div key={note.id} className="note">
            <div className={`${note.color}`}>
                <textarea
                    onChange={handleChange}
                    placeholder="Write a note..."
                    value={note.text}
                />
            </div>
        </div> : null;
};

export default NoteSelected;
