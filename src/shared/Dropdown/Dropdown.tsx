import React, {useEffect} from "react";
import styles from "./dropdown.css";
import { pipe } from "../../shared/compose.examples";


interface IDropdownProps {
  buttonOpen: React.ReactNode;
  buttonClose: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const NOOP = () => {}

export const Dropdown =({
  buttonOpen,
  buttonClose,
  children,
  isOpen,
  onOpen = NOOP,
  onClose = NOOP,
}: IDropdownProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);

  useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);

  useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen]);

  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

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
