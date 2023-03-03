import { useState } from "react";
import Notes from "./components/notes/Notes";
import Todo from "./components/todo/Todo";
import "./app.css";

const App = () => {
  const [mode, setMode] = useState(true);

  return (
    <div className="app-container">
      <div>
        <span onClick={() => setMode(true)}>NOTE</span>
        <span onClick={() => setMode(false)}>NOTE</span>
      </div>
      {mode ? <Notes /> : <Todo />}
    </div>
  );
};

export default App;
