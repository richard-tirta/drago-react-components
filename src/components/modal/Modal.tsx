
import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
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
  required?: boolean;
}

const Modal: FC<ModalProps> = ({
  position = 'center',
  size = 'medium',
  children,
  aria,
  withOverlay = true,
  onClick,
  isModalOpen = false,
  required = false,
}) => {

  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      dialogRef.current?.showModal();
      setIsShown(true);
    } else {
      document.body.style.overflow = 'auto';
      dialogRef.current?.close();
      setIsShown(false);
    }
  }, [isModalOpen]);

  const overlayStyles = [
    styles.overlay,
    styles[position],
    styles[required ? 'required' : ''],
  ].join(' ');

  const modalStyles = [
    styles.modals,
    styles[position],
    styles[size],
    styles[isShown ? 'visible' : ''],
    styles[withOverlay ? 'with_overlay' : 'without_overlay'],
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
    <div className={modalStyles} role={required ? 'alertdialog' : 'dialog'} onClick={handleModalClick} aria-labelledby={aria} data-testid="modal">
      <div>
        {/* Close button */}
        <div className={styles.close_button}>
          {
            required ? null : (
              <Button type={'tertiary'} size={'medium'} onClick={onClick} aria="Close modal">
                <span className={styles.close_button__icon}>
                  &times;
                </span>
              </Button>
            )}
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
        <dialog className={overlayStyles} onClick={required ? undefined : handleOverlayClick} ref={dialogRef} data-testid="overlay">
          {modal}
        </dialog>
      ) : (
        modal
      ),
      document.body as HTMLElement
    ) : null;
}

export default Modal
