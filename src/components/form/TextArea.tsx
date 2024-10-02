
import { FC, useState } from 'react'
import styles from './Input.module.scss'

interface TextAreaProps {
  rows?: number;
  cols?: number;
  name?: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  value: string;
  placeholder?: string;
  label?: string;
  aria?: string;
  hint?: string;
  error?: string;
  isError?: boolean;
  isValid?: boolean;
  required?: boolean;
}

const TextArea: FC<TextAreaProps> = ({
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
  required = false,
  onChange,
  onBlur,
  value = '',
}) => {

  const [showHint, setShowHint] = useState(true);


  const handleHintClick = () => {
    console.log('Hint clicked');
    if (hint) {
      setShowHint(!showHint);
    }
  }

  const inputClassNames = [
    styles.textarea,
    disabled ? styles.disabled : '',
  ].join(' ');

  const postIconClassNames = [
    styles.textarea__hint,
    disabled ? styles.disabled : '',
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
        name={name}
        rows={rows}
        cols={cols}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {
        hint ? <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={postIconClassNames} onClick={handleHintClick}>
        <path d="M8.00004 14.6666C4.31814 14.6666 1.33337 11.6818 1.33337 7.99998C1.33337 4.31808 4.31814 1.33331 8.00004 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998C14.6667 11.6818 11.6819 14.6666 8.00004 14.6666ZM8.00004 13.3333C10.9456 13.3333 13.3334 10.9455 13.3334 7.99998C13.3334 5.05446 10.9456 2.66665 8.00004 2.66665C5.05452 2.66665 2.66671 5.05446 2.66671 7.99998C2.66671 10.9455 5.05452 13.3333 8.00004 13.3333ZM7.33337 9.99998H8.66671V11.3333H7.33337V9.99998ZM8.66671 8.90338V9.33331H7.33337V8.33331C7.33337 7.96511 7.63184 7.66665 8.00004 7.66665C8.55231 7.66665 9.00004 7.21891 9.00004 6.66665C9.00004 6.11436 8.55231 5.66665 8.00004 5.66665C7.51491 5.66665 7.11044 6.01213 7.01924 6.47049L5.71158 6.20895C5.92429 5.13944 6.86804 4.33331 8.00004 4.33331C9.28871 4.33331 10.3334 5.37798 10.3334 6.66665C10.3334 7.72365 9.63051 8.61651 8.66671 8.90338Z" fill="#A3A3A3" />
      </svg> : null
      }
      <p id={`${aria}Hint`} className={styles.input__hint}>
        {isError
          ? error
          : hint
        }
      </p>
    </div>
  )
}

export default TextArea
