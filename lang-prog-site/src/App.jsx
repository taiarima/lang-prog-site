import { useState } from "react";

import NavBar from "./components/NavBar";
import WhyUseLangProgLandingPanel from "./components/WhyLangProgLandingPanel";
import HowItWorksPanel from "./components/HowItWorksPanel";
import FeaturesPanel from "./components/FeaturesPanel";
import BottomBar from "./components/BottomBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <NavBar />
        <WhyUseLangProgLandingPanel />
        <HowItWorksPanel />
        <FeaturesPanel />
        <BottomBar />
      </div>
    </div>
  );
}

export default App;
