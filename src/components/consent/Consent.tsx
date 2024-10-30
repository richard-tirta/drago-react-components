
import React, { FC, useState, useEffect } from 'react'
import Button from '../button/Button';
import Modal from '../modal/Modal';
import Checkbox from '../form/Checkbox';
import styles from './Consent.module.scss'


const Consent = () => {
  const [showConsent, setShowConsent] = useState(true);
  const [showManageCookies, setShowManageCookies] = useState(false);
  const [analyticsInput, setAnalyticsInput] = useState(false);
  const [marketingInput, setMarketingInput] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) setShowConsent(true);
  }, []);

  const handleAllowCookies = () => {
    const preferences = ['essential', 'analytics', 'marketing'];
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setShowConsent(!showConsent);
  }

  const handleManageClick = () => {
    setShowManageCookies(!showManageCookies);
  }

  const handleDeclineCookies = () => {
    const preferences = ['essential'];
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setShowConsent(!showConsent);
  }
  
  const handleManageAllowCookies = () => { 
    const preferences = ['essential', 'analytics', 'marketing'];
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setShowManageCookies(!showManageCookies);
    setShowConsent(!showConsent)
  }
  const handleManageSaveCookies = async () => {
    let formData = ['essential'];
    if (analyticsInput) formData.push('analytics');
    if (marketingInput) formData.push('marketing');
    console.log('Form submitted', formData);
    localStorage.setItem('cookieConsent', JSON.stringify(formData));
    setShowManageCookies(!showManageCookies);
    setShowConsent(!showConsent)
   }
  
  const handleManageDeclineCookies = () => {
    const preferences = ['essential'];
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setShowManageCookies(!showManageCookies);
    setShowConsent(!showConsent)
  }

  return (
    <>
      <Modal isModalOpen={showConsent} position={'bottom'} onClick={() => setShowConsent(!showConsent)} required={true}>
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
          <Button type='secondary' onClick={handleManageClick} aria="Manage Cookies">
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
          <div>
            <div className={styles.header_container}>
              <h3>Essentials</h3>
              <Checkbox
                disabled={true}
                checked={true}
                value="essential"
            />
            </div>
            <p>
              These cookies are essential for the proper functioning of our services and cannot be disabled.
            </p>
          </div>
          <div>
            <div className={styles.header_container}>
              <h3>Analytics</h3>
              <Checkbox
                onChange={() => setAnalyticsInput(!analyticsInput)}
                checked={analyticsInput}
              value={'analytics'}
              aria={'analytics'}
            />
            </div>
            <p>
              These cookies help us to understand how you interact with our website by providing information about the areas visited, the time spent on the website, and any issues encountered, such as error messages.
            </p>
          </div>
          <div>
            <div className={styles.header_container}>
              <h3>Marketing</h3>
              <Checkbox
                onChange={() => setMarketingInput(!marketingInput)}
                checked={marketingInput}
              value={"marketing"}
              aria={"marketing"}
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
            <Button type='secondary' onClick={handleManageSaveCookies} aria="Save Cookies">
              Save
            </Button>
          </div>
          <Button type="destructive" size="small" onClick={handleManageDeclineCookies}>
            Decline all
          </Button>
      </Modal>
      }
    </>
  )
}

export default Consent
