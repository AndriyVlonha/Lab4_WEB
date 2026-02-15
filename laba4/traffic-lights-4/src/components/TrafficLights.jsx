import { useState, useEffect } from "react";
import Light from "./Light";
import PropTypes from "prop-types";
import "./TrafficLights.css";

const TrafficLights = ({ orientation = "vertical", onLightClick }) => {
  const [activeLight, setActiveLight] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLight((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleLightClick = (color) => {
    if (onLightClick) {
      onLightClick(color);
    }
  };

  return (
    <div className="traffic-lights-wrapper">
      <div className={`traffic-lights-container ${orientation}`}>
        <Light
          tlColor="red"
          isActive={activeLight === 0}
          onClick={() => handleLightClick("red")}
        />
        <Light
          tlColor="yellow"
          isActive={activeLight === 1}
          onClick={() => handleLightClick("yellow")}
        />
        <Light
          tlColor="green"
          isActive={activeLight === 2}
          onClick={() => handleLightClick("green")}
        />
      </div>
    </div>
  );
};

TrafficLights.propTypes = {
  orientation: PropTypes.oneOf(["vertical", "horizontal"]),
  onLightClick: PropTypes.func,
};

export default TrafficLights;