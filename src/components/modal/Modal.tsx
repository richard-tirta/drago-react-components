
import React, { FC, useCallback, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import Button from '../button/Button';
import styles from './Modal.module.scss'

interface ModalProps {
  position?: 'top' | 'center' | 'bottom' | 'left' | 'right';
  size?: 'small' | 'medium' | 'large' | 'full';
  children: React.ReactNode;
  aria?: string;
  withOverlay?: boolean;
  onClick?: () => void;
  isModalOpen?: boolean;
}

const Modal: FC<ModalProps> = ({
  position = 'center',
  size = 'medium',
  children,
  aria,
  withOverlay = true,
  onClick,
  isModalOpen = false,
}) => {

  const [isShown, setIsShown] = React.useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      setIsShown(true);
    } else {
      document.body.style.overflow = 'auto';
      setIsShown(false);
    }
  }, [isModalOpen]);

  const overlayStyles = [
    styles.overlay,
    styles[position],
  ].join(' ');

  const modalStyles = [
    styles.modals,
    styles[position],
    styles[size],
    styles[isShown ? 'visible' : ''],
  ].join(' ');

  const handleOverlayClick = useCallback(
    () => {
      if (onClick) onClick();
    },
    [onClick]
  );

  const handleModalClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
    },
    []
  );

  const modal = (
    <div className={modalStyles} role="dialog" onClick={handleModalClick} aria-labelledby={aria}>
      <div>
        {/* Close button */}
        <div className={styles.close_button}>
          <Button type={'tertiary'} aria-label="Close modal" size={'medium'} onClick={onClick}>
            <span className={styles.close_button__icon}>
              &times;
            </span>
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );

  return isModalOpen
    ? ReactDOM.createPortal(
      withOverlay ? (
        <div className={overlayStyles} onClick={handleOverlayClick} >
          {modal}
        </div >
      ) : (
        modal
      ),
      document.body as HTMLElement
    ) : null;
}

export default Modal
