import React from "react";
import {
  backgroundBoxContainer,
  boxOne,
  boxTwo,
  boxThree,
} from "./BackgroundBox.module.css";

const BackgroundBox = () => {
  return (
    <div className={backgroundBoxContainer}>
      <div className={boxOne}></div>
      <div className={boxTwo}></div>
      <div className={boxThree}></div>
    </div>
  );
};

export default BackgroundBox;
