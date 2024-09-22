
import { FC, useState } from 'react';
import styles from './Input.module.scss'

interface PostInputIconProps {
  inputType: 'number' | 'text' | 'email' | 'date' | 'text-area' | 'password' | 'dropdown';
  size: 'small' | 'medium' | 'large';
  hint: string;
  disabled: boolean;
  onPasswordClick?: () => void;
  onHintClick?: () => void;
}


const PostInputIcon: FC<PostInputIconProps> = ({
  inputType,
  size,
  disabled,
  hint,
  onPasswordClick,
  onHintClick
}) => {

  const [eyeOpen, setEyeOpen] = useState(false);

  const postIconClassNames = [
    styles.input__posticon,
    styles[size],
    disabled ? styles.disabled : '',
  ].join(' ');

  const handleEyeClick = () => {
    setEyeOpen(!eyeOpen);
    if (onPasswordClick) {
      onPasswordClick();
    }
  }

  return (
    <>
      {
        inputType === 'password' ? (
          eyeOpen
            ? <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
              width="16px" height="16px" viewBox="0 0 442.04 442.04" className={postIconClassNames} onClick={handleEyeClick} >
              <g>
                <g>
                  <path d="M221.02,341.304c-49.708,0-103.206-19.44-154.71-56.22C27.808,257.59,4.044,230.351,3.051,229.203
          c-4.068-4.697-4.068-11.669,0-16.367c0.993-1.146,24.756-28.387,63.259-55.881c51.505-36.777,105.003-56.219,154.71-56.219
          c49.708,0,103.207,19.441,154.71,56.219c38.502,27.494,62.266,54.734,63.259,55.881c4.068,4.697,4.068,11.669,0,16.367
          c-0.993,1.146-24.756,28.387-63.259,55.881C324.227,321.863,270.729,341.304,221.02,341.304z M29.638,221.021
          c9.61,9.799,27.747,27.03,51.694,44.071c32.83,23.361,83.714,51.212,139.688,51.212s106.859-27.851,139.688-51.212
          c23.944-17.038,42.082-34.271,51.694-44.071c-9.609-9.799-27.747-27.03-51.694-44.071
          c-32.829-23.362-83.714-51.212-139.688-51.212s-106.858,27.85-139.688,51.212C57.388,193.988,39.25,211.219,29.638,221.021z"/>
                </g>
                <g>
                  <path d="M221.02,298.521c-42.734,0-77.5-34.767-77.5-77.5c0-42.733,34.766-77.5,77.5-77.5c18.794,0,36.924,6.814,51.048,19.188
          c5.193,4.549,5.715,12.446,1.166,17.639c-4.549,5.193-12.447,5.714-17.639,1.166c-9.564-8.379-21.844-12.993-34.576-12.993
          c-28.949,0-52.5,23.552-52.5,52.5s23.551,52.5,52.5,52.5c28.95,0,52.5-23.552,52.5-52.5c0-6.903,5.597-12.5,12.5-12.5
          s12.5,5.597,12.5,12.5C298.521,263.754,263.754,298.521,221.02,298.521z"/>
                </g>
                <g>
                  <path d="M221.02,246.021c-13.785,0-25-11.215-25-25s11.215-25,25-25c13.786,0,25,11.215,25,25S234.806,246.021,221.02,246.021z" />
                </g>
              </g>
            </svg >
            : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
              className={postIconClassNames} onClick={handleEyeClick}>
              <path d="M4.5 15.5C7.5 9 16.5 9 19.5 15.5" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M16.8162 12.1825L19.5 8.5" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12 10.625V7" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M7.18383 12.1825L4.5 8.5" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ) : (
          hint
            ? <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={postIconClassNames} onClick={onHintClick}>
              <path d="M8.00004 14.6666C4.31814 14.6666 1.33337 11.6818 1.33337 7.99998C1.33337 4.31808 4.31814 1.33331 8.00004 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998C14.6667 11.6818 11.6819 14.6666 8.00004 14.6666ZM8.00004 13.3333C10.9456 13.3333 13.3334 10.9455 13.3334 7.99998C13.3334 5.05446 10.9456 2.66665 8.00004 2.66665C5.05452 2.66665 2.66671 5.05446 2.66671 7.99998C2.66671 10.9455 5.05452 13.3333 8.00004 13.3333ZM7.33337 9.99998H8.66671V11.3333H7.33337V9.99998ZM8.66671 8.90338V9.33331H7.33337V8.33331C7.33337 7.96511 7.63184 7.66665 8.00004 7.66665C8.55231 7.66665 9.00004 7.21891 9.00004 6.66665C9.00004 6.11436 8.55231 5.66665 8.00004 5.66665C7.51491 5.66665 7.11044 6.01213 7.01924 6.47049L5.71158 6.20895C5.92429 5.13944 6.86804 4.33331 8.00004 4.33331C9.28871 4.33331 10.3334 5.37798 10.3334 6.66665C10.3334 7.72365 9.63051 8.61651 8.66671 8.90338Z" fill="#A3A3A3" />
            </svg>
            : null
        )
      }
    </>
  );
}

export default PostInputIcon;
