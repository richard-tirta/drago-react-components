
import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import Button from '../button/Button';
import styles from './Modal.module.scss'

interface ModalProps {
  position?: 'top' | 'center' | 'bottom' | 'left' | 'right';
  size?: 'small' | 'medium' | 'large' | 'full';
  children: React.ReactNode;
  aria?: string;
  onClick?: () => void;
  isModalOpen?: boolean;
}

const Modal: FC<ModalProps> = ({
  position = 'center',
  size = 'medium',
  children,
  aria,
  onClick,
  isModalOpen = false,
}) => {

  const overlayStyles = [
    styles.overlay,
    styles[position],
  ].join(' ');

  const modalStyles = [
    styles.modals,
    styles[position],
    styles[size],
  ].join(' ');

  return isModalOpen
    ? ReactDOM.createPortal(
    <div className={overlayStyles} onClick={onClick}>
      <div className={modalStyles} role="dialog" onClick={(event) => event.stopPropagation()}>
        <div className={styles.header}>
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
    </div>,
    document.body as HTMLElement
  ) : <></>;
}

export default Modal
