import React from "react";


export default function Button({ text, textColor, bgColor, border, onClick }) {
  
  return (
    <button
      onClick={onClick}
      className="btn btn-primary"
      style={{ backgroundColor: bgColor, color: textColor, border: border}}
    >
      {text}
    </button>
  );
}
Button.defaultProps = {
  textColor: "white",
  bgColor: "#7B2CBF",
  text: "Button",
  border: "none"
};
