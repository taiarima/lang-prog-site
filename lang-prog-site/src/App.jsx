import { useState } from "react";

import NavBar from "./components/NavBar";
import WhyUseLangProgLandingPanel from "./components/WhyLangProgLandingPanel";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <NavBar />
        <WhyUseLangProgLandingPanel />

        <h1>Lang-Prog-Site</h1>
      </div>
    </div>
  );
}

export default App;
