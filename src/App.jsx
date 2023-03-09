import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import { Button } from "./components/Button";
import { DropdownMenu } from "./components/DropdownMenu";
import { Card } from "./components/Card";
import { Page } from "./components/Page";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div className="card">
        <Page />
      </div>
    </div>
  );
}

export default App;
