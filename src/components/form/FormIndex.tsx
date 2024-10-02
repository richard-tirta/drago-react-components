

import Input from './Input'
import TextArea from './TextArea'
import DropDown from './DropDown'
import Button from '../button/Button'
import styles from './InputIndex.module.scss'

import useInput from './use-input';

const FormIndex = () => {

  const usernameInput = useInput('text');
  const passwordInput = useInput('password');
  const emailInput = useInput('email');
  const nameInput = useInput('text');
  const phoneInput = useInput('number');
  const dateInput = useInput('date');

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    
    const formData = {
      username: usernameInput.value,
      password: passwordInput.value,
      email: emailInput.value,
      name: nameInput.value,
      phone: phoneInput.value,
      date: dateInput.value,
    }

    console.log('Form submitted', formData);
  }

  return (
    <>
      <h2>Form test</h2>
      <div>
        <form onSubmit={submitHandler}>
          <div className={styles.container__inputs}>

            <Input
              type={'text'}
              autocomplete={'username'}
              label={'Username'}
              placeholder={'Enter your username'}
              name={'username'}
              hint={'This is your username'}
              required={true}
              isError={usernameInput.hasError}
              onChange={usernameInput.valueChangeHandler}
              onBlur={usernameInput.inputBlurHandler}
              value={usernameInput.value}
            />
            <Input
              autocomplete={'current-password'}
              label={"Password"}
              placeholder={'Enter your password'}
              name={'password'}
              type={'password'}
              hint={'Password should contain number, letters and at least 6 characters'}
              required={true}
              isError={passwordInput.hasError}
              onChange={passwordInput.valueChangeHandler}
              onBlur={passwordInput.inputBlurHandler}
              value={passwordInput.value}
            />
            <Input
              autocomplete={'email'}
              label={"Email"}
              placeholder={'Enter your email'}
              type={'email'}
              name={'email'}
              hint={'This is email'}
              required={true}
              error={'Invalid email'}
              isError={emailInput.hasError}
              onChange={emailInput.valueChangeHandler}
              onBlur={emailInput.inputBlurHandler}
              value={emailInput.value}
            />
          </div>
          <div className={styles.container__inputs}>
            <Input
              autocomplete={'name'}
              label={"Name"}
              name={'name'}
              hint={'This is your name'}
              placeholder={'Enter your name'}
              onChange={nameInput.valueChangeHandler}
              onBlur={nameInput.inputBlurHandler}
              value={nameInput.value}
            />
            <Input
              autocomplete={'tel'}
              label={"Phone"}
              placeholder={'Enter your phone number'}
              type={'number'}
              name={'phone'}
              hint={'This is your phone number'}
              error={'Invalid phone number'}
              isError={phoneInput.hasError}
              onChange={phoneInput.valueChangeHandler}
              onBlur={phoneInput.inputBlurHandler}
              value={phoneInput.value}
            />
          </div>
          <div className={styles.container__inputs}>
            <Input
              label={"Dates"}
              type={'date'}
              placeholder={'Enter the dates'}
              isError={dateInput.hasError}
              onChange={dateInput.valueChangeHandler}
              onBlur={dateInput.inputBlurHandler}
              value={dateInput.value}
            />
            <TextArea
              label={"Text Area"}
              placeholder={'Type text area'}
              name={'text-area'}
              hint={'This is text area'}
            />
            <DropDown
              label={"Dropdown"}
              option={['Option 1', 'Option 2', 'Option 3']}
            />
          </div>
          <Button onClick={() => {}} disabled={false}>
            Submit
          </Button>
        </form>
      </div>
    </>
  )
}

export default FormIndex
