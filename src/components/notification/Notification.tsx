
import React, { FC, useState, useEffect, useMemo, memo } from 'react'
import Modal from '../modal/Modal'
import Header from '../component_support/Header'
import Paragraph from '../component_support/Paragraph'

interface NotificationData {
  title: string;
  message: string;
  timer: number;
}

interface NotificationProps {
  data: NotificationData[];
}

const Notification = memo(({ data }: { data: NotificationData[] }) => {
  const [notificationData, setNotificationData] = useState<NotificationData[]>(data);
  const [currentNotification, setCurrentNotification] = useState<NotificationData | null>(null);
  
  console.log('hello', data);
  
  useEffect(() => {
    if (data.length > notificationData.length) {
      setNotificationData(data);
    }
  }, [data]);
 
  useEffect(() => {
    let time: NodeJS.Timeout | undefined;

    console.log('hello effect', notificationData);

    if (notificationData.length > 0) {
      setCurrentNotification(notificationData[0]);
      if (notificationData[0].timer > 0) {
        time = setTimeout(() => {
          setCurrentNotification(null);
          setNotificationData((prevData) => prevData.slice(1));
        }, notificationData[0].timer);
      }
    }

    return () => {
      if (time) {
        clearTimeout(time);
      }
    }
  }, [notificationData]);
  
  const modalClickHandler = () => {
    console.log('modal click');
    setCurrentNotification(null);
    setNotificationData((prevData) => prevData.slice(1));
  }

  console.log('hello current notif', currentNotification);


  return (
    <>
      <Modal isModalOpen={!!currentNotification} position={'top'} onClick={modalClickHandler} withOverlay={false}>
        <Header>{currentNotification?.title}</Header>
        <Paragraph>{currentNotification?.message}</Paragraph>
      </Modal>
    </>
  )
});

export default Notification;
