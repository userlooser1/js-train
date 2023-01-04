import React, { useState, PropsWithChildren } from "react";
import styles from "./AnimBtn.module.css";
import { ButtonProps } from "./types";

export const AnimBtn = () => {
  const [color, setColor] = useState<string>("green");

  const changeColor = () => {
    setColor("red");
  };

  return (
    <button
      style={{ backgroundColor: color }}
      className={styles.animated}
      onClick={changeColor}
    >
      PRESSSSSS
    </button>
  );
};
