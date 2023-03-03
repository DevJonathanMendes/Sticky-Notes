import { useState } from "react";
import Notes from "./components/notes/Notes";
import Todo from "./components/todo/Todo";
import "./app.css";

const App = () => {
  const [mode, setMode] = useState(true);

  return (
    <div className="app-container">
      <span className="switch">
        <div onClick={() => setMode(true)}>NOTE</div>
        <div onClick={() => setMode(false)}>NOTE</div>
      </span>
      {mode ? <Notes /> : <Todo />}
    </div>
  );
};

export default App;
