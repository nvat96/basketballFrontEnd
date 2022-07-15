import React from "react";

export default function Button({ text, link, textColor, bgColor }) {
  return (
    <a href={link}>
      <button
        className="btn"
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        {text}
      </button>
    </a>
    
  );
}
Button.defaultProps = {
  link: "http://localhost:3000/",
  textColor: "white",
  bgColor: '#7B2CBF',
  text: "Button"
};
