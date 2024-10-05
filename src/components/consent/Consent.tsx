
import React, { FC, useState, useEffect } from 'react'
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
  const [showConsent, setShowConsent] = useState(true);
  const [showManageCookies, setShowManageCookies] = useState(false);

  useEffect(() => {

  }, []);

  const handleAllowCookies = () => {
    setShowConsent(!showConsent);
  }

  const handleManageClick = () => {
    setShowManageCookies(!showManageCookies);
  }

  const handleDeclineCookies = () => { 
    setShowConsent(!showConsent);
  }
  
  const handleManageAllowCookies = () => { 
    setShowManageCookies(!showManageCookies);
    setShowConsent(!showConsent)
  }
  const handleManageSaveCookies = () => {
    setShowManageCookies(!showManageCookies);
    setShowConsent(!showConsent)
   }
  
  const handleManageDeclineCookies = () => {
    setShowManageCookies(!showManageCookies);
    setShowConsent(!showConsent)
   }


  return (
    showConsent &&
    <>
      <Modal isModalOpen={true} position={'bottom'} onClick={() => setShowConsent(!showConsent)} required={true}>
        <h3>
          We use cookies
        </h3>
        <p>
          We use cookies to enhance your browsing experience and improve our website's performance. By continuing to use this site, you consent to the use of cookies. To learn more about how we use cookies and your options, please read our <a href="#">cookie policy</a>.
        </p>
        <div className={styles.button_container}>
          <Button onClick={handleAllowCookies}>
            Allow cookies
          </Button>
          <Button type='secondary' onClick={handleManageClick}>
            Manage cookies
          </Button>
          <Button type="destructive" size="small" onClick={handleDeclineCookies}>
            Decline all
          </Button>
        </div>
      </Modal>
      {showManageCookies && <Modal isModalOpen={true} position={'center'} size="small" onClick={handleManageClick} required={true}>
        <h3>
          Manage cookies
        </h3>
        <form>
          <div>
            <div className={styles.header_container}>
              <h3>Essentials</h3>
              <Input
                type="checkbox"
                onChange={toggleInput.valueChangeHandler}
                onBlur={toggleInput.inputBlurHandler}
                value={toggleInput.value}
                disabled={true}
                checked={true}
              />
            </div>
            <p>
              These cookies are essential for the proper functioning of our services and cannot be disabled.
            </p>
          </div>
          <div>
            <div className={styles.header_container}>
              <h3>Analytics</h3>
              <Input
                type="checkbox"
                onChange={toggleInput.valueChangeHandler}
                onBlur={toggleInput.inputBlurHandler}
                value={toggleInput.value}
              />
            </div>
            <p>
              These cookies help us to understand how you interact with our website by providing information about the areas visited, the time spent on the website, and any issues encountered, such as error messages.
            </p>
          </div>
          <div>
            <div className={styles.header_container}>
              <h3>Marketing</h3>
              <Input
                type="checkbox"
                onChange={toggleInput.valueChangeHandler}
                onBlur={toggleInput.inputBlurHandler}
                value={toggleInput.value}
              />
            </div>
            <p>
              These cookies allow us to show you advertisements relevant to you through our advertising partners.
            </p>
          </div>
          <div>
            <Button onClick={handleManageAllowCookies}>
              Accept all
            </Button>
            <Button type='secondary' onClick={handleManageSaveCookies}>
              Save
            </Button>
          </div>
          <Button type="destructive" size="small" onClick={handleManageDeclineCookies}>
            Decline all
          </Button>
        </form>
      </Modal>
      }
    </>
  )
}

export default Consent
