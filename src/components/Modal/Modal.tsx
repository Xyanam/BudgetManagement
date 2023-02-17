import React, { FC } from "react";
import classes from "./Modal.module.css";

type modalProps = {
  children: React.ReactNode;
  isVisible: boolean;
  setIsVisible: (flag: boolean) => void;
};

const Modal: FC<modalProps> = ({ children, isVisible, setIsVisible }) => {
  const rootClasses = [classes.modal];

  if (isVisible) {
    rootClasses.push(classes.active);
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setIsVisible(false)}>
      <div className={classes.modal__content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
