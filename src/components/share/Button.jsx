import React from "react";


export default function Button({ text, textColor, bgColor, border }) {
  
  return (
    <button
      
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
