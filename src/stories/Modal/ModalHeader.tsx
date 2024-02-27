import React from "react";

import styles from "./Modal.module.css";
import IconButton from "../IconButton";

type ModalHeaderProps = {
  children: React.ReactNode;
  onClose: () => void;
  disableOnClose?: boolean;
};

const ModalHeader = ({
  children,
  onClose,
  disableOnClose = false,
}: ModalHeaderProps) => {
  return (
    <div className={styles.modalHeader}>
      <h2 className={styles.modalHeading}>{children}</h2>
      <IconButton icon="close" onClick={onClose} isDisabled={disableOnClose} />
    </div>
  );
};

export default ModalHeader;
