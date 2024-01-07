import React from "react";

type GuideType = {
  multiple: number;
  selectedNumber: number;
};

const Guide = ({ multiple, selectedNumber }: GuideType) => {
  const row = Array.from({ length: multiple }, (_, index) => (
    <div key={index} style={{ display: "flex" }}>
      {Array.from({ length: selectedNumber }, (_, i) => (
        <div key={i}>🍧</div>
      ))}
    </div>
  ));
  return <>{row}</>;
};

export default Guide;
