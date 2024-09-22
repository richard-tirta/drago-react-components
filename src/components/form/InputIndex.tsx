
import Input from './Input'
import TextArea from './TextArea'
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
              label={'Username'} 
              placeholder={'Enter your username'}
              name={'username'}
              hint={'This is your username'}
              required={true}
            />
            <Input 
              label={"Password"} 
              placeholder={'Enter your password'}
              name={'password'}
              type={'password'}
              hint={'Password should contain both number and letters'}
              required={true}
            />
            <Input 
              label={"Email"} 
              placeholder={'Enter your email'}
              type={'email'}
              name={'email'}
              hint={'This is email'}
              required={true}
            />
          </div>
          <div className={styles.container__inputs}>
            <Input 
              label={"Name"} 
              placeholder={'Enter your name'}
            />
            <Input 
              label={"Phone"} 
              placeholder={'Enter your phone number'}
            />
          </div>
          <div className={styles.container__inputs}>
            <Input 
              label={"Number"} 
              placeholder={'Enter number'}
            />
            <Input 
              label={"Dates"} 
              placeholder={'Enter the dates'}
            />
          </div>
          <div className={styles.container__inputs}>
            <Input 
              label={"Text"} 
              placeholder={'Type text'}
              name={'text'}
            />
            <TextArea
              label={"Text Area"} 
              placeholder={'Type text area'}
              type={'text-area'}
              name={'text-area'}
            />
            <Input 
              label={"Dropdown"} 
              placeholder={'Type dropdown'}
              type={'dropdown'}
              name={'dropdown'}
            />
             <Input 
              label={"Disabled"} 
              placeholder={'This type is disabled'}
              name={'disabled-text'}
              disabled={true}
            />
          </div>
        </form>
      </div>
    </>
  )
}

export default InputIndex
