import React from "react";

export default function Button(props) {
  // const clickEvent = () => {
  //   props.onClick();
  // };
  return (
    <button
      className="btn btn-primary"
      style={{
        backgroundColor: props.bgColor,
        color: props.textColor,
        border: props.border,
      }}
      // onClick={() => props.onClick}
    >
      {props.text}
    </button>
  );
}
Button.defaultProps = {
  textColor: "white",
  bgColor: "#7B2CBF",
  text: "Button",
  border: "none",
};
