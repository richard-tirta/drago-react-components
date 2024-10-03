
import { useState} from 'react'
import styles from './ModalIndex.module.scss'
import Modal from './Modal'
import Button from '../button/Button'

type ModalSize = 'small' | 'medium' | 'large' | 'full';
type ModalPosition = 'top' | 'center' | 'bottom' | 'left' | 'right';

const ModalIndex = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSize, setSize] = useState<ModalSize>('medium');
  const [modalPosition, setPosition] = useState<ModalPosition>('center');

  const handleModalOpen = (position : ModalPosition, size: ModalSize) => {
    setPosition(position as ModalPosition);
    setSize(size as ModalSize);
    setIsModalOpen(true);
  }

  return (
    <>
      <h2>Modals</h2>
      <p>Attributes:</p>
      <ul>
        <li>position: 'top' | 'center' | 'bottom' | 'left' | 'right'</li>
        <li>size: 'small' | 'medium' | 'large' | 'full'</li>
        <li>aria: string</li>
        <li>onClick: () =&gt; void</li>
        <li>isModalOpen: boolean</li>
      </ul>
      <h3>Small Modal</h3>
      <div className={styles.container__buttons}>
        <Button onClick={() => handleModalOpen('center', 'small')}>
          Center Small
        </Button>
        <Button onClick={() => handleModalOpen('left', 'small')}>
          Left Small
        </Button>
        <Button onClick={() => handleModalOpen('right', 'small')}>
          Right Small
        </Button>
        <Button onClick={() => handleModalOpen('top', 'small')}>
          Top Small
        </Button>
        <Button onClick={() => handleModalOpen('bottom', 'small')}>
          Bottom Small
        </Button>
      </div>
      <h3>Medium Modal</h3>
      <div className={styles.container__buttons}>
        <Button onClick={() => handleModalOpen('center', 'medium')}>
          Center Medium
        </Button>
        <Button onClick={() => handleModalOpen('left', 'medium')}>
          Left Medium
        </Button>
        <Button onClick={() => handleModalOpen('right', 'medium')}>
          Right Medium
        </Button>
        <Button onClick={() => handleModalOpen('top', 'medium')}>
          Top Medium
        </Button>
        <Button onClick={() => handleModalOpen('bottom', 'medium')}>
          Bottom Medium
        </Button>
      </div>
      <h3>Large Modal</h3>
      <div className={styles.container__buttons}>
        <Button onClick={() => handleModalOpen('center', 'large')}>
          Center Large
        </Button>
        <Button onClick={() => handleModalOpen('left', 'large')}>
          Left Large
        </Button>
        <Button onClick={() => handleModalOpen('right', 'large')}>
          Right Large
        </Button>
        <Button onClick={() => handleModalOpen('top', 'large')}>
          Top Large
        </Button>
        <Button onClick={() => handleModalOpen('bottom', 'large')}>
          Bottom Large
        </Button>
      </div>
      <h3>Full Modal</h3>
      <div className={styles.container__buttons}>
        <Button onClick={() => handleModalOpen('center', 'full')}>
          Center Full
        </Button>
      </div>
      {
          isModalOpen && (
            <Modal aria="Primary Modal" size={modalSize} position={modalPosition} isModalOpen={isModalOpen} onClick={() => setIsModalOpen(false)}>
              <h2>Small Center Modal</h2>
              <p>
                The wizard quickly jinxed the gnomes before they vaporized.
              </p>
              <Button onClick={() => setIsModalOpen(false)} type={'primary'}>
                Close the Gate
              </Button>
            </Modal>
          )}
    </>
  )
}

export default ModalIndex
