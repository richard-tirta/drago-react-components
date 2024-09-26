
import Input from './Input'
import TextArea from './TextArea'
import DropDown from './DropDown'
import styles from './InputIndex.module.scss'

const InputIndex = () => {


  return (
    <>
      <h2>Inputs</h2>
      <p>Attributes:</p>
      <ul>
        <li>type: 'text' | 'email' | 'number' | 'date' | 'text-area' | 'password' | 'dropdown';</li>
        <li>size: 'small' | 'medium' | 'large';</li>
        <li>disabled: boolean;</li>
        <li>onChange?: () =&gt; void;</li>
        <li>onFocus?: () =&gt; void;</li>
        <li>placeholder?: string;</li>
        <li>label?: string;</li>
        <li>aria?: string;</li>
        <li>hint?: 'string';</li>
        <li>error?: 'string';</li>
        <li>isError?: boolean</li>
      </ul>
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
            />
            <Input 
              autocomplete={'current-password'}
              label={"Password"} 
              placeholder={'Enter your password'}
              name={'password'}
              type={'password'}
              hint={'Password should contain number, letters and at least 6 characters'}
              required={true}
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
            />
          </div>
          <div className={styles.container__inputs}>
            <Input 
              autocomplete={'name'}
              label={"Name"} 
              name={'name'}
              hint={'This is your name'}
              placeholder={'Enter your name'}
            />
            <Input 
              autocomplete={'tel'}
              label={"Phone"} 
              placeholder={'Enter your phone number'}
              type={'number'}
              name={'phone'}
              hint={'This is your phone number'}
              error={'Invalid phone number'}
            />
          </div>
          <div className={styles.container__inputs}>
            <Input 
              label={"Number"} 
              placeholder={'Enter number'}
              type={'number'}
            />
            <Input 
              label={"Dates"} 
              placeholder={'Enter the dates'}
            />
          </div>
          <div className={styles.container__inputs}>
            <Input 
              label={"Text"} 
              placeholder={'Type text small'}
              name={'text'}
              size={'small'}
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
             <Input 
              label={"Disabled"} 
              placeholder={'This type is disabled'}
              name={'disabled-text'}
              size={'large'}
              disabled={true}
            />
          </div>
        </form>
      </div>
    </>
  )
}

export default InputIndex
