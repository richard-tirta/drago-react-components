
import React, { FC, forwardRef } from 'react'
import styles from './Input.module.scss'


interface CheckboxProps {
  autocomplete?: string;
  name?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  aria?: string;
  hint?: string;
  required?: boolean;
  checked?: boolean;
  value?: string;
}

const Checkbox: FC<CheckboxProps> = forwardRef<HTMLInputElement, CheckboxProps>(({
  autocomplete = 'off',
  disabled = false,
  label = '',
  aria = 'input',
  hint = '',
  required = false,
  onChange,
  checked = false,
  value = '',
}, ref ) => {

  const inputClassNames = [
    styles.input,
    styles.checkbox,
    disabled ? styles.disabled : '',
  ].join(' ');


  return (
    <div className={styles.input__module}>
      <label htmlFor={`${aria}Label`}>
        {label}{required ? '*' : ''}
      </label>
      <input
        autoComplete={autocomplete}
        type={'checkbox'}
        className={inputClassNames}
        onChange={onChange}
        aria-labelledby={`${aria}Label`}
        aria-describedby={`${aria}Hint`}
        value={value}
        disabled={disabled}
        checked={checked}
        ref={ref}
      />
      {
        hint
          ? (<p id={`${aria}Hint`} className={styles.input__hint}>{hint}</p>)
          : ''
      }
    </div>
  )
});

export default Checkbox
