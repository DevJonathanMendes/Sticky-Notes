const NoteList = (props) => {
    const { notes, readNote, deleteNote } = props;

    return (
        <div className="notes-list-container">
            <ul>{notes.map(({ id, text }) =>
                <li key={id} className="notes-list-item" onClick={() => readNote(id)}>
                    <button onClick={() => deleteNote(id)}>DELETAR</button>
                    <p className="notes-list-item-text">{text || "Write a note..."}</p>
                </li>)
            }</ul>
        </div>
    );
};

export default NoteList;
