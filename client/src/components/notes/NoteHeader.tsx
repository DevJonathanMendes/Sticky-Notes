const NoteHeader = (props) => {
    return (
        <header className="notes-list-header">
            <h2>Sticky Notes</h2>
            <input
                type="search"
                className="notes-list-header-input"
                placeholder="Research..."
            />
            <div><button onClick={() => props.createNote()}>YELLOW</button></div>
        </header>
    );
};

export default NoteHeader;
