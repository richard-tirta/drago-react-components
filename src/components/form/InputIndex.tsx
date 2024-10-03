
import Input from './Input'
import TextArea from './TextArea'
import DropDown from './DropDown'
import styles from './InputIndex.module.scss'
import useInput from './use-input';

const InputIndex = () => {

  const usernameInput = useInput('text');
  const passwordInput = useInput('password');
  const emailInput = useInput('email');
  const nameInput = useInput('text');
  const phoneInput = useInput('number');
  const dateInput = useInput('date');
  const numberInput = useInput('number');
  const smTextInput = useInput('text');
  const textAreaInput = useInput('text');
  const dropDownInput = useInput('text');
  const disabledInput = useInput('text');
  const toggleInput = useInput('text');
  

  return (
    <>
      <h2>Inputs</h2>
      <p>Attributes:</p>
      <div className={styles.container__inputs}>
        <div>
          <p>
            <strong>Input</strong>
          </p>
          <ul>
            <li>autocomplete: string</li>
            <li>type: 'text' | 'email' | 'number' | 'date' | 'password'</li>
            <li>size: 'small' | 'medium' | 'large';</li>
            <li>disabled: boolean;</li>
            <li>onChange*: () =&gt; void;</li>
            <li>onBlur*: () =&gt; void;</li>
            <li>value*: string;</li>
            <li>name?: string</li>
            <li>placeholder?: string</li>
            <li>required?: boolean</li>
            <li>label?: string</li>
            <li>aria?: string</li>
            <li>hint?: string</li>
            <li>error?: string</li>
            <li>isValid?: boolean</li>
          </ul>
        </div>
        <div>
          <p>
            <strong>Textarea</strong>
          </p>
          <ul>
            <li>rows: number</li>
            <li>cols: number</li>
            <li>disabled: boolean</li>
            <li>placeholder?: string</li>
            <li>name?: string</li>
            <li>label?: string</li>
            <li>aria?: string</li>
            <li>hint?: 'string'</li>
            <li>error?: 'string'</li>
            <li>required?: boolean</li>
          </ul>
        </div>
        <div>
          <p>
            <strong>Dropdown</strong>
          </p>
          <ul>
            <li>option: []</li>
            <li>disabled: boolean</li>
            <li>onChange?: () =&gt void</li>
            <li>placeholder?: string</li>
            <li>name?: string</li>
            <li>label?: string</li>
            <li>aria?: string</li>
            <li>hint?: string</li>
            <li>error?: string</li>
            <li>required?: boolean</li>
          </ul>
        </div>
      </div>
      <div>
        <form>
          <div className={styles.container__inputs}>

            <Input
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
              alwaysShowHint={true}
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
             <Input
              label={"Toogle"}
              type={'checkbox'}
              name={'toogle'}
              alwaysShowHint={true}
              hint={'This is a toogle'}
              onChange={toggleInput.valueChangeHandler}
              onBlur={toggleInput.inputBlurHandler}
              value={toggleInput.value}
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
              label={"Number"}
              placeholder={'Enter number'}
              type={'number'}
              onChange={numberInput.valueChangeHandler}
              onBlur={numberInput.inputBlurHandler}
              value={numberInput.value}
              
            />
            <Input
              label={"Dates"}
              type={'date'}
              placeholder={'Enter the dates'}
              onChange={dateInput.valueChangeHandler}
              onBlur={dateInput.inputBlurHandler}
              value={dateInput.value}
            />
          </div>
          <div className={styles.container__inputs}>
            <Input
              label={"Text"}
              placeholder={'Type text small'}
              name={'text'}
              size={'small'}
              onChange={smTextInput.valueChangeHandler}
              onBlur={smTextInput.inputBlurHandler}
              value={smTextInput.value}
            />
            <TextArea
              label={"Text Area"}
              placeholder={'Type text area'}
              name={'text-area'}
              hint={'This is text area'}
              onBlur={textAreaInput.inputBlurHandler}
              onChange={textAreaInput.valueChangeHandler}
              value={textAreaInput.value}
            />
            <DropDown
              label={"Dropdown"}
              option={['Option 1', 'Option 2', 'Option 3']}
              onBlur={dropDownInput.inputBlurHandler}
              onChange={dropDownInput.valueChangeHandler}
              value={dropDownInput.value}
            />
            <Input
              label={"Disabled"}
              placeholder={'This type is disabled'}
              name={'disabled-text'}
              size={'large'}
              disabled={true}
              onChange={disabledInput.valueChangeHandler}
              onBlur={disabledInput.inputBlurHandler}
              value={disabledInput.value}
            />
          </div>
        </form>
      </div>
    </>
  )
}

export default InputIndex
