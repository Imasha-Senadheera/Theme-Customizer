import React, { useState } from "react";
import "../index.css";

const ThemeCustomizer = () => {
  // State variables for background color, text color, font size, and color history
  const [backgroundColor, setBackgroundColor] = useState("#ffffff"); // White in hex format
  const [textColor, setTextColor] = useState("#000000"); // Black in hex format
  const [fontSize, setFontSize] = useState(16);
  const [colorHistory, setColorHistory] = useState([]);

  // Function to update the background color and add to color history
  const updateBackgroundColor = (e) => {
    const newColor = e.target.value;
    setBackgroundColor(newColor);
    addToColorHistory(newColor, textColor);
    console.log("Updated Background Color:", newColor);
  };

  // Function to update the text color and add to color history
  const updateTextColor = (e) => {
    const newColor = e.target.value;
    setTextColor(newColor);
    addToColorHistory(backgroundColor, newColor);
    console.log("Updated Text Color:", newColor);
  };

  // Function to increase font size
  const increaseFontSize = () => {
    setFontSize((prevFontSize) => {
      const newFontSize = prevFontSize + 1;
      console.log("Increased Font Size:", newFontSize);
      return newFontSize;
    });
  };

  // Function to decrease font size
  const decreaseFontSize = () => {
    setFontSize((prevFontSize) => {
      const newFontSize = prevFontSize - 1;
      console.log("Decreased Font Size:", newFontSize);
      return newFontSize;
    });
  };

  // Function to add new color combination to history, keeping only the last 5 entries
  const addToColorHistory = (bgColor, txtColor) => {
    const newEntry = { bgColor, txtColor };
    setColorHistory((prevHistory) => {
      const updatedHistory = [...prevHistory, newEntry];
      console.log("Updated Color History:", updatedHistory);
      return updatedHistory.slice(-5);
    });
  };

  // Style object for the customizable text block
  const customStyle = {
    backgroundColor: backgroundColor,
    color: textColor,
    fontSize: `${fontSize}px`,
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    margin: "10px 0",
  };

  return (
    <div>
      <div style={customStyle}>This is a customizable text block.</div>
      <div>
        <label>
          Background Color   :
          <input
            type="color"
            value={backgroundColor}
            onChange={updateBackgroundColor}
          />
        </label>
        <label>
          Text Color   : 
          <input type="color" value={textColor} onChange={updateTextColor} />
        </label>
        <button onClick={increaseFontSize}>Increase Font Size</button>
        <button onClick={decreaseFontSize}>Decrease Font Size</button>
      </div>
      <h2>Color History</h2>
      <ul>
        {colorHistory.map((entry, index) => (
          <li key={index}>
            Background: {entry.bgColor}, Text: {entry.txtColor}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeCustomizer;
