
import React, { FC, useState, useEffect, useMemo, memo } from 'react'
import Modal from '../modal/Modal'
import Header from '../component_support/Header'
import Paragraph from '../component_support/Paragraph'

interface NotificationData {
  title: string;
  message: string;
  timer: number;
  timeStamp: number;
}

interface NotificationProps {
  data: NotificationData[];
  setNotification: React.Dispatch<React.SetStateAction<NotificationData[]>>;
}

const Notification = memo(({ data, setNotification }: NotificationProps) => {

  const [currentNotification, setCurrentNotification] = useState<NotificationData | null>(null);

  console.log('notification', data);
  
  useEffect(() => {
    if (data.length > 0) {
      setCurrentNotification(data[0]);
    }
  }, [data]);
 
  useEffect(() => {
    let time: NodeJS.Timeout | undefined;

    if (currentNotification) {
      if (currentNotification.timer > 0) {
        time = setTimeout(() => {
          setCurrentNotification(null);
          setNotification(prevData => prevData.slice(1));
        }, currentNotification.timer);
      }
    }

    return () => {
      if (time) {
        clearTimeout(time);
      }
    }
  }, [currentNotification, setNotification]);
  
  const modalClickHandler = () => {
    setCurrentNotification(null);
    setNotification(prevData => prevData.slice(1));
  }

  return (
    <>
      <Modal isModalOpen={!!currentNotification} position={'top'} onClick={modalClickHandler} withOverlay={false}>
        <Header>{currentNotification?.title}</Header><br/>
        <Paragraph>{currentNotification?.message}</Paragraph>
      </Modal>
    </>
  )
});

export default Notification;
