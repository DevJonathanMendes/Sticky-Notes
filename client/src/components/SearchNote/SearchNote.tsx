import { ISearchNote } from "../../interfaces/ISearchNote";

import "./SearchNote.css";

const SearchNote: ISearchNote = (props) =>
    <header>
        <h1>Sticky Notes</h1>
        <input type="search"
            onChange={(e) => props.searchNote(e.target.value)}
            placeholder="Search for a note"
        />
    </header>;

export default SearchNote;
