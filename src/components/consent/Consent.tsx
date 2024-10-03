
import React, { FC, useEffect} from 'react'
import Button from '../button/Button';
import Modal from '../modal/Modal';
import Input from '../form/Input';
import styles from './Consent.module.scss'
import useInput from '../form/use-input';

interface ConsentProps {
  position?: 'top' | 'center' | 'bottom' | 'left' | 'right';
  size?: 'small' | 'medium' | 'large' | 'full';
  aria?: string;
  withOverlay?: boolean;
  onClick?: () => void;
  isModalOpen?: boolean;
}

const Consent: FC<ConsentProps> = (

) => {
  const toggleInput = useInput('text');

  useEffect(() => {

  }, []);



  return (
    <>
    <Modal isModalOpen={true} position={'bottom'}>
      <h3>
        We use cookies
      </h3>
      <p>
        We use cookies to enhance your browsing experience and improve our website's performance. By continuing to use this site, you consent to the use of cookies. To learn more about how we use cookies and your options, please read our <a href="#">cookie policy</a>.
      </p>
      <div className={styles.button_container}>
        <Button>
          Allow cookies
        </Button>
        <Button type='secondary'>
          Manage cookies
        </Button>
        <Button type="destructive" size="small">
          Decline all
        </Button>
      </div>
      </Modal>
      <Modal isModalOpen={true} position={'center'} size="small">
        <h3>
          Manage cookies
        </h3>
        <div>
          <div>
            <h3>Essentials</h3>
            <Input
              type="checkbox"
              onChange={toggleInput.valueChangeHandler}
              onBlur={toggleInput.inputBlurHandler}
              value={toggleInput.value}
              disabled={true}
              hint="These cookies are essential for the proper functioning of our services and cannot be disabled."
              alwaysShowHint={true}
            />
          </div>
        </div>
        <div>
          <div>
            <h3>Analytics</h3>
            <Input
              type="checkbox"
              onChange={toggleInput.valueChangeHandler}
              onBlur={toggleInput.inputBlurHandler}
              value={toggleInput.value}
              hint="These cookies help us to understand how you interact with our website by providing information about the areas visited, the time spent on the website, and any issues encountered, such as error messages."
              alwaysShowHint={true}
            />
          </div>
        </div>
        <div>
          <div>
            <h3>Marketing</h3>
            <Input
              type="checkbox"
              onChange={toggleInput.valueChangeHandler}
              onBlur={toggleInput.inputBlurHandler}
              value={toggleInput.value}
              hint="These cookies allow us to show you advertisements relevant to you through our advertising partners."
              alwaysShowHint={true}
            />
          </div>
        </div>
        <div>
          <Button>
            Accept all
          </Button>
          <Button type='secondary'>
            Save
          </Button>
        </div>
        <Button type="destructive" size="small">
          Decline all
        </Button>
      </Modal>
    </>
  )
}

export default Consent
