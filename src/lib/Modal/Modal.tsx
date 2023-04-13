import ReactModal from "react-modal";
import { poppins } from "@/fonts";
import styles from "./Modal.module.css";
import { ModalProps } from "./Modal.types";

export default function Modal({
  isOpen,
  hideModal,
  className,
  overlayClassName,
  children,
}: ModalProps) {
  return (
    <ReactModal
      appElement={document.getElementById("modals") as HTMLElement}
      isOpen={isOpen}
      className={`${className || styles.modal}`}
      overlayClassName={overlayClassName || styles.overlay}
      onRequestClose={hideModal}
    >
      <div className={poppins.className}>{children}</div>
    </ReactModal>
  );
}
