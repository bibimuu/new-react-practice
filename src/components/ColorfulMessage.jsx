import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const constntStyle = {
    color,
    fontSize: "18px"
  };

  return <p style={constntStyle}>{children}</p>;
};
