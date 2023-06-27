import React, { useEffect } from "react";
import ColorPicker from "../components/ColorPicker";
import { COLORS_PRESET } from "../constant";
import { generateColors } from "../utils";

const HomePage = () => {
  const [color, setColor] = React.useState("#fff");
  const [activeColor, setActiveColor] = React.useState(6);
  const [showColorInfo, setShowColorInfo] = React.useState(false);
  const baseColor = color;
  const colors = generateColors(baseColor);

  useEffect(() => {

        setColor(colors[activeColor]);
    document.querySelector("body")!.style.backgroundColor = colors[activeColor];
  }, [colors]);
  return (
    <div>
      <div className="color-box">
        <ColorPicker setColor={setColor} color={color} />
        <div>
          <h4
            className="color-presets-header"
            style={{
              color: colors[1],
            }}
          >
            Color Presets
          </h4>
          <div className="color-presets">
            {COLORS_PRESET.map((color, index) => (
              <button
                key={color.color}
                onClick={() => {
                  setColor(color.color);
                }}
                className={`color-preset ${index === activeColor && "active"}`}
                style={{
                  border: `1px solid ${color.color}`,
                }}
              >
                <div
                  className="small-box"
                  style={{
                    backgroundColor: color.color,
                  }}
                ></div>
                <p className="name">{color.name}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="stack">
        <div className="group">
          <label htmlFor="toggle-color-info" className="toggle-color-info">
           <span className="checkmark"></span>
            <input
              id="toggle-color-info"
              type="checkbox"
              checked={showColorInfo}
              onChange={() => setShowColorInfo((prev) => !prev)}
            />
            {showColorInfo ? "Hide" : "Show"} Color Info
          </label>
          
        </div>
        <div className="colors">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => {
                // setColor(color);
                setActiveColor(colors.indexOf(color));
              }}
              className={`color ${color === colors[activeColor] && "active"}`}
              style={{
                backgroundColor: color,
              }}
            >
              {showColorInfo && <p className="color-text">{color}</p>}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
