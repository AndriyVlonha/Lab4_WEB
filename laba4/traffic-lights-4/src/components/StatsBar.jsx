import PropTypes from "prop-types";
import "./StatsBar.css";

const StatsBar = ({ clicks, orientation, onOrientationChange }) => {
  const handleToggle = () => {
    const newOrientation = orientation === "vertical" ? "horizontal" : "vertical";
    onOrientationChange(newOrientation);
  };

  return (
    <div className="stats-bar">
      <div className="stats-bar-content">
        <div className="stats-section">
          <h3>Статистика кліків</h3>
          <div className="stats-list">
            <span className="stat-item red">Червоний - {clicks.red}</span>
            <span className="stat-item yellow">Жовтий - {clicks.yellow}</span>
            <span className="stat-item green">Зелений - {clicks.green}</span>
          </div>
        </div>
        
        <div className="controls-section">
          <button className="orientation-btn" onClick={handleToggle}>
            {orientation === "vertical" ? "↔ Горизонтально" : "↕ Вертикально"}
          </button>
        </div>
      </div>
    </div>
  );
};

StatsBar.propTypes = {
  clicks: PropTypes.shape({
    red: PropTypes.number.isRequired,
    yellow: PropTypes.number.isRequired,
    green: PropTypes.number.isRequired,
  }).isRequired,
  orientation: PropTypes.oneOf(["vertical", "horizontal"]).isRequired,
  onOrientationChange: PropTypes.func.isRequired,
};

export default StatsBar;