const NoteHeader = (props) => {
    const { createNote } = props;

    return (
        <header className="notes-list-header">
            <h2>Sticky Notes</h2>
            <input
                type="search"
                className="notes-list-header-input"
                placeholder="Research..."
            />
            <div className="icons-color">
                <button onClick={() => createNote("yellow")}>
                    YELLOW
                </button>
                <button onClick={() => createNote("red")}>
                    RED
                </button>
                <button onClick={() => createNote("green")}>
                    GREEN
                </button>
            </div>
        </header>
    );
};

export default NoteHeader;
