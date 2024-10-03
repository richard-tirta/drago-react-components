
import { useState} from 'react'
import styles from './ConsentIndex.module.scss'
import Consent from '../consent/Consent';
import Modal from '../modal/Modal';
import Button from '../button/Button'


const ConsentIndex = () => {

  return (
    <>
      <h2>Modals</h2>
      <p>Attributes:</p>
      <ul>
        <li>position: 'top' | 'center' | 'bottom' | 'left' | 'right'</li>
        <li>size: 'small' | 'medium' | 'large' | 'full'</li>
        <li>aria: string (aria label id)</li>
        <li>onClick: () =&gt; void</li>
        <li>isModalOpen: boolean</li>
      </ul>
      <div className={styles.container__buttons}>
      </div>
      <Consent/>
    </>
  )
}

export default ConsentIndex
