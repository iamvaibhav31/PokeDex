export interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  className?: string;
  overlayClassName?: string;
  hideModal?: () => void;
}
