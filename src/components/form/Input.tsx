
import React, { FC, useState } from 'react'
import styles from './Input.module.scss'
import PostInputIcon from './PostInputIcon';


interface InputProps {
  autocomplete?: string;
  type?: 'text' | 'email' | 'number' | 'date' | 'password' | 'checkbox';
  size?: 'small' | 'medium' | 'large';
  name?: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  value: string;
  placeholder?: string;
  label?: string;
  aria?: string;
  hint?: string;
  isError?: boolean;
  error?: string;
  required?: boolean;
  checked?: boolean;
}

const Input: FC<InputProps> = ({
  autocomplete = 'off',
  type = 'text',
  size = 'medium',
  name = '',
  disabled = false,
  placeholder = '',
  label = '',
  aria = 'input',
  hint = '',
  isError = false,
  error = 'Error',
  required = false,
  onChange,
  onBlur,
  value = '',
  checked = false,
}) => {

  const [inputType, setInputType] = useState(type);
  const [showHint, setShowHint] = useState(type === 'password' ? true : false);

  const handlePasswordVisibility = () => {
    setInputType(inputType === 'password' ? 'text' : 'password');
  }

  const handleHintClick = () => {
    if (hint) {
      setShowHint(!showHint);
    }
  }

  const inputClassNames = [
    styles.input,
    styles[type],
    styles[size],
    disabled ? styles.disabled : '',
    inputType === 'email' ? styles.icon : '',
    isError ? styles.error : '',
  ].join(' ');


  return (
    <div className={styles.input__module}>
      <label htmlFor={`${aria}Label`}>
        {label}{required ? '*' : ''}
      </label>
      {
        inputType === 'email'
          ? <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.input__preicon} name={name}>
            <path d="M2.49996 2.5H17.5C17.9602 2.5 18.3333 2.8731 18.3333 3.33333V16.6667C18.3333 17.1269 17.9602 17.5 17.5 17.5H2.49996C2.03973 17.5 1.66663 17.1269 1.66663 16.6667V3.33333C1.66663 2.8731 2.03973 2.5 2.49996 2.5ZM16.6666 6.0316L10.0598 11.9483L3.33329 6.01328V15.8333H16.6666V6.0316ZM3.75951 4.16667L10.0515 9.71833L16.2508 4.16667H3.75951Z" fill="#A3A3A3" />
          </svg>
          : null
      }
      <input
        autoComplete={autocomplete}
        type={inputType === 'number' ? 'text' : inputType}
        className={inputClassNames}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        aria-labelledby={`${aria}Label`}
        aria-describedby={`${aria}Hint`}
        value={value}
        required={required}
        disabled={disabled}
        {...(type === 'checkbox' && checked ? { checked } : {})}
      />
      {
        type === 'checkbox' ? null : <PostInputIcon inputType={type} size={size} disabled={disabled} hint={hint} onPasswordClick={handlePasswordVisibility} onHintClick={handleHintClick} />
      }
      {
        type !== 'checkbox' ?
          <p id={`${aria}Hint`} className={styles.input__hint}>
            {isError
              ? error
              : showHint ? hint : ''
            }
          </p>
          : null
      }
    </div>
  )
}

export default Input
