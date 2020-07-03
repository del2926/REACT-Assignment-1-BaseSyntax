import React from "react";

const userInput = (props) => {
  const inputStyle = {
    border: "2px solid red",
    marginTop: "40px",
  };
  return (
    <input
      type="text"
      style={inputStyle}
      onChange={props.changeUsername}
      value={props.currentUsername}
    />
  );
};

export default userInput;
