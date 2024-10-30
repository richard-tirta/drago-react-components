
import { useState, useCallback } from 'react'
import Button from '../button/Button'
import Input from '../form/Input'
import useInput from '../form/use-input'
import Notification from './Notification'

interface NotificationData {
  title: string;
  message: string;
  timer: number;
  timeStamp: number;
}

const NotificationIndex = () => {

  const [submittedNotifications, setSubmittedNotifications] = useState<NotificationData[]>([]);
  const titleInput = useInput('text');
  const messageInput = useInput('text');
  const timerInput = useInput('number');

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const newNotificationData: NotificationData = {
      title: titleInput.value,
      message: messageInput.value,
      timer: +timerInput.value * 1000,
      timeStamp: Date.now(),
    };
    setSubmittedNotifications((prevNotifications) => [...prevNotifications, newNotificationData]);
  }, [titleInput.value, messageInput.value, timerInput.value]);

  return (
    <>
      <h2>Notification</h2>
      <form onSubmit={(e) => {handleSubmit(e)}}>
        <Input
          label="Title"
          type="text"
          name="title"
          placeholder="Title"
          value={titleInput.value}
          onChange={titleInput.valueChangeHandler}
          onBlur={titleInput.inputBlurHandler}
          required
        />
        <Input
          label="Message"
          type="text"
          name="message"
          placeholder="Message"
          value={messageInput.value}
          onBlur={messageInput.inputBlurHandler}
          onChange={messageInput.valueChangeHandler}
          required
        />
        <Input
          label="Timer"
          type="text"
          name="timer"
          placeholder="Timer"
          value={timerInput.value}
          onBlur={timerInput.inputBlurHandler}
          onChange={timerInput.valueChangeHandler}
        />
        <Button onClick={() => { }}>Submit</Button>
      </form>
      <Notification data={submittedNotifications} />
    </>
  )
}

export default NotificationIndex
