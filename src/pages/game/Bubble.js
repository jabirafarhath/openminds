import React from "react";

const Bubble = ({ pop }) => {
  return <div className="bubble" onClick={pop} ontouchstart={pop} />;
};

export default Bubble;