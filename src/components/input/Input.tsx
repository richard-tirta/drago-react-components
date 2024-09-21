
import React, { FC, useState } from 'react'
import styles from './Input.module.scss'
import PostInputIcon from './PostInputIcon';

interface InputProps {
  type?: 'text' | 'email' | 'number' | 'date' | 'text-area' | 'password' | 'dropdown';
  size?: 'small' | 'medium' | 'large';
  name?: string;
  disabled?: boolean;
  onChange?: () => void;
  onFocus?: () => void;
  placeholder?: string;
  label?: string;
  aria?: string;
  hint?: 'string';
  error?: 'string';
  isError?: boolean;
}

const Input: FC<InputProps> = ({
  type = 'text',
  size = 'medium',
  name = '',
  disabled = false,
  onChange,
  onFocus,
  placeholder = '',
  label = '',
  aria = 'input',
  hint = 'Hint',
  error = 'Error',
  isError = false,
}) => {

  const [inputType, setInputType] = useState(type);

  const inputClassNames = [
    styles.input,
    styles[type],
    styles[size],
    disabled ? styles.disabled : '',
    inputType === 'email' ? styles.icon : '',
  ].join(' ');

  const postIconClassNames = [
    styles.input__posticon,
    styles[size],
    disabled ? styles.disabled : '',
  ].join(' ');

  const handlePasswordVisibility = () => {
    console.log('hello');
    setInputType(inputType === 'password' ? 'text' : 'password');
   }


  return (
    <div className={styles.input__module}>
      <label htmlFor={`${aria}Label`}>
        {label}
      </label>
      {
        inputType === 'email'
          ? <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.input__preicon} name={name}>
            <path d="M2.49996 2.5H17.5C17.9602 2.5 18.3333 2.8731 18.3333 3.33333V16.6667C18.3333 17.1269 17.9602 17.5 17.5 17.5H2.49996C2.03973 17.5 1.66663 17.1269 1.66663 16.6667V3.33333C1.66663 2.8731 2.03973 2.5 2.49996 2.5ZM16.6666 6.0316L10.0598 11.9483L3.33329 6.01328V15.8333H16.6666V6.0316ZM3.75951 4.16667L10.0515 9.71833L16.2508 4.16667H3.75951Z" fill="#A3A3A3" />
          </svg>
          : null
      }
      <input
        type={inputType}
        className={inputClassNames}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        aria-labelledby={`${aria}Label`}
        aria-describedby={`${aria}Hint`}
      />
      <PostInputIcon inputType={type} size={size} disabled={disabled} onClick={handlePasswordVisibility}/>
      <p id={`${aria}Hint`} className={styles.input__hint}>
        {isError ? error : hint}
      </p>
    </div>
  )
}

export default Input
