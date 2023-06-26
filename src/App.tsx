import * as React from 'react';
import './App.css';
import { generateColors } from './utils';
import ColorPicker from "./ColorPicker"

export default function App() {
  const [color, setColor] = React.useState('#fff');
  const [activeColor, setActiveColor] = React.useState('');
  const baseColor = color;
  const colors = generateColors(baseColor);

  return (
    <div>
      <h1>Color Shades Generator</h1>
      <ColorPicker setColor={setColor} />

      <div
      className="colors"
      >
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => {
              // setColor(color);
              setActiveColor(color);
            }}

          className={`color ${color === activeColor && 'active'}`}
            style={{
              backgroundColor: color,
            }}
          >
            <p
            className='color-text'>
              {color}

            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
