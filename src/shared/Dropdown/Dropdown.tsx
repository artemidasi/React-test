import React from "react";
import styles from "./dropdown.css";
import { pipe } from "../../shared/compose.examples";

interface HTMLElement {
  [key: string]: any;
}

interface IDropdownProps {
  buttonOpen: React.ReactNode;
  buttonClose: HTMLElement;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const NOOP = () => {}

export function Dropdown({
  buttonOpen,
  buttonClose,
  children,
  isOpen,
  onOpen = NOOP,
  onClose = NOOP,
}: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);

  React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);

  React.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen]);

  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  console.log(buttonClose);

  // buttonClose.addEventListener("click", handleOpen);

  return (
    <div className={styles.container}>
      <div onClick={handleOpen}>{buttonOpen}</div>
      {isDropdownOpen && (
        <div className={styles.listContainer}>
          <ul onClick={NOOP} className={styles.list}>
            {children}
            <div onClick={handleOpen}>{buttonClose}</div>
          </ul>
        </div>
      )}
    </div>
  );
}
