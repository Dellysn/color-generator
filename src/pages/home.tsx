import React, { useEffect } from "react";
import ColorPicker from "../components/ColorPicker";
import { COLORS_PRESET } from "../constant";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { generateColors } from "../utils";

const HomePage = () => {
    const [color, setColor] = React.useState("#5d1cae");
    const [activeColor, setActiveColor] = React.useState(6);
    const [showColorInfo, setShowColorInfo] = React.useState(false);
    const baseColor = color;
    const colors = generateColors(baseColor);

    useEffect(() => {
        setColor(colors[activeColor]);
        document.title = `On-Kolors | ${colors[activeColor]}`;
        document.querySelector("body")!.style.backgroundColor =
            colors[activeColor];
    }, [colors]);

    return (
        <div>
            <Navbar color={colors[9]} />
            <div className={"color-box"}>
                <ColorPicker setColor={setColor} color={color} />
                <div>
                    <h4 className={"color-presets-header"}>Color Presets</h4>
                    <div className={"color-presets"}>
                        {COLORS_PRESET.map((color) => (
                            <button
                                key={color.color}
                                onClick={() => {
                                    setColor(color.color);
                                }}
                                className={`color-preset ${
                                    color.color === baseColor && "active"
                                } `}
                                style={{
                                    border: `1px solid ${color.color}`,
                                }}
                            >
                                <div
                                    className={"small-box"}
                                    style={{
                                        backgroundColor: color.color,
                                    }}
                                ></div>
                                <p className={"color-code"}>{color.name}</p>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="info-toggle-group">
                <label
                    htmlFor="toggle-color-info"
                    className="toggle-color-info"
                >
                    <input
                        id="toggle-color-info"
                        type="checkbox"
                        checked={showColorInfo}
                        onChange={() => setShowColorInfo((prev) => !prev)}
                    />
                    {showColorInfo ? "Hide" : "Show"} Color Info
                </label>
                <button
                    key={color}
                    onClick={() => {
                        navigator.clipboard.writeText(JSON.stringify(colors));
                        alert("Copied to clipboard");
                    }}
                >
                    {" "}
                    Copy to clipboard
                </button>
            </div>
            <div className={"stack"}>
                <div className={"colors"}>
                    {colors.map((color) => (
                        <button
                            key={color}
                            onClick={() => {
                                // setColor(color);
                                setActiveColor(colors.indexOf(color));
                            }}
                            className={`color ${
                                color === colors[activeColor] && "active"
                            }`}
                            style={{
                                backgroundColor: color,
                            }}
                        >
                            {showColorInfo && (
                                <p className={"color-code"}>{color}</p>
                            )}
                        </button>
                    ))}
                </div>
            </div>
            <Footer color={colors[9]} />
        </div>
    );
};

export default HomePage;
