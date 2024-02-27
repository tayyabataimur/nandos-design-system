import React from "react";
import styles from "./Modal.module.css";
import cx from "classnames";

type ModalBodyProps = {
  children: React.ReactNode;
  additionalClassnames?: string;
};

const ModalBody = ({ children, additionalClassnames }: ModalBodyProps) => {
  return (
    <div className={cx(styles.modalBody, additionalClassnames)}>{children}</div>
  );
};

export default ModalBody;
