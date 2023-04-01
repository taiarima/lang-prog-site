import { useState } from "react";

import NavBar from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <NavBar />
        <h1>Lang-Prog-Site</h1>
      </div>
    </div>
  );
}

export default App;
