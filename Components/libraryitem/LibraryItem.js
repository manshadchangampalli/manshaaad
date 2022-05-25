import React from "react";
import {itemBox} from './LibraryItem.module.css'

const LibraryItem = ({name}) => {
  return (
    <div className={itemBox}>
      <h1>{name}</h1>
    </div>
  );
};

export default LibraryItem;
