
import React, { FC, useState } from 'react'
import styles from './Input.module.scss'
import PostInputIcon from './PostInputIcon';

interface TextAreaProps {
  type?: 'text' | 'email' | 'number' | 'date' | 'text-area' | 'password' | 'dropdown';
  rows?: number;
  cols?: number;
  name?: string;
  disabled?: boolean;
  onChange?: () => void;
  onFocus?: () => void;
  placeholder?: string;
  label?: string;
  aria?: string;
  hint?: string;
  error?: string;
  isError?: boolean;
  reset?: () => void;
  isValid?: boolean;
  required?: boolean;
}

const TextArea: FC<TextAreaProps> = ({
  type = 'text',
  rows = 4,
  cols = 50,
  name = '',
  disabled = false,
  placeholder = '',
  label = '',
  aria = 'input',
  hint = '',
  error = 'Error',
  isError = false,
  reset,
  required = false,
}) => {

  const [inputType, setInputType] = useState(type);
  const [showHint, setShowHint] = useState(type !== 'password' ? false : true);


  const handleHintClick = () => {
    console.log('Hint clicked');
    if (hint) {
      setShowHint(!showHint);
    }
  }

  const inputClassNames = [
    styles.input,
    styles[type],
    disabled ? styles.disabled : '',
    inputType === 'email' ? styles.icon : '',
  ].join(' ');

  return (
    <div className={styles.input__module}>
      <label htmlFor={`${aria}Label`}>
        {label}{required ? '*' : ''}
      </label>
      <textarea
        className={inputClassNames}
        placeholder={placeholder}
        aria-labelledby={`${aria}Label`}
        aria-describedby={`${aria}Hint`}
        required={required}
        rows={rows}
        cols={cols}
      />
      {/* <PostInputIcon inputType={'text-area'} size={size} disabled={disabled} hint={hint} onHintClick={handleHintClick} /> */}
      <p id={`${aria}Hint`} className={styles.input__hint}>
        {isError
          ? error
          : showHint ? hint : ''
        }
      </p>
    </div>
  )
}

export default TextArea
