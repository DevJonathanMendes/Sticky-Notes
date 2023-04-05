import { useState } from "react";
import Notes from "./components/notes/Notes";
import Todo from "./components/todo/Todo";

import "./app.css";

let appMode: string;

if (localStorage.getItem("appMode")) {
  const str: any = localStorage.getItem("appMode");
  const obj = JSON.parse(str);
  appMode = obj.appMode;
} else {
  localStorage.setItem("appMode", JSON.stringify({ appMode: "notes" }));
  appMode = "notes";
};

const App = () => {
  const [mode, setMode] = useState(appMode);

  const changeMode = (mode: string) => {
    localStorage.setItem("appMode", JSON.stringify({ appMode: mode }));
    setMode(mode);
  };

  return (
    <div className="app-container">
      <div className="switch">

        <span onClick={() => changeMode("notes")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill={mode === "notes" ? "currentColor" : "grey"} viewBox="0 0 16 16">
            <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5V13a1 1 0 0 0 1 1V1.5a.5.5 0 0 1 .5-.5H14a1 1 0 0 0-1-1H1.5z" />
            <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v11A1.5 1.5 0 0 0 3.5 16h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 16 9.586V3.5A1.5 1.5 0 0 0 14.5 2h-11zM3 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V9h-4.5A1.5 1.5 0 0 0 9 10.5V15H3.5a.5.5 0 0 1-.5-.5v-11zm7 11.293V10.5a.5.5 0 0 1 .5-.5h4.293L10 14.793z" />
          </svg>
        </span>

        <span onClick={() => changeMode("todo")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill={mode === "notes" ? "grey" : "currentColor"} viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z" />
            <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z" />
            <path fillRule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z" />
          </svg>
        </span>

      </div>{mode === "notes" ? (() => {
        document.title = "Notes"
        return <Notes />
      })() : (() => {
        document.title = "To-do"
        return <Todo />
      })()
      }</div>
  );
};

export default App;
