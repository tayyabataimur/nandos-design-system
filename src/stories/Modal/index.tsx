import React from "react";
import styles from "./Modal.module.css";
import ModalHeader from "./ModalHeader";
import ModalBody from "./ModalBody";

type ModalProps = {
  /**
   * The heading of your modal
   */
  heading: string;
  /**
   * To show the modal
   */
  isOpen: boolean;
  /**
   * What happens when your modal is closed
   */
  onClose: () => void;
  /**
   * Accessibility label
   */
  ariaLabelledby: string;
  /**
   * What you want to render inside your modal
   */
  children: React.ReactNode;
  /**
   * Disable closing the modal
   */
  disableOnClose?: boolean;
  /**
   * A unique ID for your modal
   */
  id?: string;
};

/**
 *
 * #Overview
 * A modal is a popup window that appears on top of a webpage or application to
 * display information or prompt user interaction. It typically requires user action
 * before returning to the main interface.
 * */

const Modal = ({
  heading,
  isOpen = true,
  onClose,
  ariaLabelledby,
  children,
  disableOnClose = false,
  id,
}: ModalProps) => {
  return (
    (isOpen && (
      <div className={styles.modalOverlay}>
        <div
          className={styles.modal}
          aria-labelledby={ariaLabelledby}
          aria-modal={true}
          role="dialog"
          id={id}
        >
          <ModalHeader onClose={onClose} disableOnClose={disableOnClose}>
            {heading}
          </ModalHeader>
          <ModalBody>{children}</ModalBody>
        </div>
      </div>
    )) ||
    null
  );
};

export default Modal;
