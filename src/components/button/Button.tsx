
import React, { FC } from 'react'
import classNames from 'classnames'
import styles from './Button.module.scss'

interface ButtonProps {
  type?: 'primary' | 'secondary' | 'tertiary' | 'destructive' | 'link-primary' | 'link-secondary';
  size?: 'small' | 'medium' | 'large' | 'xlarge' | 'x2large';
  icon?: 'left' | 'right' | 'both' | 'only' | 'none';
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactNode;
  aria?: string;
  customClassName?: string;
  customBackgroundColor?: string;
  customBorderColor?: string;
  customColor?: string;
}

const Button: FC<ButtonProps> = ({
  type = 'primary',
  size = 'medium',
  icon = 'none',
  disabled = false,
  onClick,
  children,
  aria,
  customClassName,
  customBorderColor,
  customBackgroundColor,
  customColor,
}) => {

  const classNames = [
    styles.button,
    styles[type],
    styles[size],
    disabled ? styles.disabled : '',
    customClassName
  ].join(' ');

  const customStyle = {
    ...(customBackgroundColor && { backgroundColor: customBackgroundColor }),
    ...(customColor && { color: customColor }),
    ...(customBorderColor && { border: `1px solid ${customBorderColor}` }),
  }

  return (
    <button
      className={classNames}
      disabled={disabled}
      onClick={!disabled ? onClick : undefined}
      aria-label={aria}
      data-testid={aria}
      style={customStyle}
    >
      {icon === 'left' || icon === 'both'
        ? <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor">
          <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z"></path>
        </svg>
        : null}
      {children}
      {icon === 'right' || icon === 'both'
        ? <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor">
          <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z"></path>
        </svg>
        : null}
    </button>
  )
}

export default Button
