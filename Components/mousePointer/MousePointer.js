import React from "react";
import { useEffect, useState } from "react";
import { mousePointer, pointerContainer } from "./MousePointer.module.css";

const MousePointer = () => {
  const [pointTop, setPointTop] = useState(500);
  const [pointLeft, setPointLeft] = useState(500);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setPointLeft(e.clientX);
      setPointTop(e.clientY);
    });
  }, []);

  return (
    <div className={pointerContainer}>
      <div
        style={{ top: pointTop, left: pointLeft }}
        className={mousePointer}
      ></div>
    </div>
  );
};

export default MousePointer;
