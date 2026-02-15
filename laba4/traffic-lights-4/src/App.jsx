import { useState } from "react";
import "./App.css";
import TrafficLights from "./components/TrafficLights";
import StatsBar from "./components/StatsBar";

function App() {
  const [orientation, setOrientation] = useState("vertical");
  const [clicks, setClicks] = useState({
    red: 0,
    yellow: 0,
    green: 0,
  });

  const handleLightClick = (color) => {
    setClicks((prevClicks) => ({
      ...prevClicks,
      [color]: prevClicks[color] + 1,
    }));
  };

  const handleOrientationChange = (newOrientation) => {
    setOrientation(newOrientation);
  };

  return (
    <div className="App">
      <h1 className="app-title">Інтерактивний світлофор</h1>

      <StatsBar
        clicks={clicks}
        orientation={orientation}
        onOrientationChange={handleOrientationChange}
      />

      <div className="traffic-light-section">
        <TrafficLights
          orientation={orientation}
          onLightClick={handleLightClick}
        />
      </div>
    </div>
  );
}

export default App;