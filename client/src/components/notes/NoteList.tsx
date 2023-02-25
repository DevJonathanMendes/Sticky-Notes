const NoteList = (props) => {
    const { notes, selectNote, deleteNote } = props;

    return (
        <div className="notes-list-container">
            <ul>{notes.map(({ id, text }) =>
                <li key={id} className="notes-list-item" onClick={() => selectNote(id)}>
                    <span onClick={() => deleteNote(id)}>DELETAR</span>
                    <p className="notes-list-item-text">{text}</p>
                </li>)
            }</ul>
        </div>
    );
};

export default NoteList;
