import React from "react";
import cx from "classnames";

import styles from "./IconButton.module.css";

import { icons } from "../assets/Icons";

const iconsList = Object.keys(icons);

type IconButtonProps = {
  icon: keyof typeof icons;
  onClick: () => void;
  isDisabled?: boolean;
  additionalClassnames?: string;
};

const IconButton = ({
  icon,
  onClick,
  isDisabled = false,
  additionalClassnames,
}: IconButtonProps) => {
  const Svg = icons[icon];

  return (
    <button
      onClick={onClick}
      className={cx(
        styles.iconButton,
        { [styles.disabled]: isDisabled },
        additionalClassnames
      )}
      disabled={isDisabled}
    >
      {Svg && <Svg />}
    </button>
  );
};

export default IconButton;
