const NoteHeader = () => {
    return (
        <header className="notes-list-header">
            <h2>Sticky Notes</h2>
            <input
                type="search"
                className="notes-list-header-input"
                placeholder="Research..."
            />
            <div><span>YELLOW</span></div>
        </header>
    );
};

export default NoteHeader;
