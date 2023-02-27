const NoteList = (props) => {
    const { notes, readNote, deleteNote } = props;

    return (
        <div className="notes-list-container">
            <ul>{notes.map(({ id, text }) =>
                <li key={id} className="notes-list-item">
                    <p className="text" onClick={() => readNote(id)}>
                        {text || "Write a note..."}
                    </p>

                    <button className="icon-delete" onClick={() => deleteNote(id)}>D</button>
                </li>)
            }</ul>
        </div >
    );
};

export default NoteList;
