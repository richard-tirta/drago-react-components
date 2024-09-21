
import Input from './Input'
import styles from './InputIndex.module.scss'

const InputIndex = () => {


  return (
    <>
      <h2>Inputs</h2>
      <p>Attributes:</p>
      <ul>
        <li>
          <strong>type:</strong> 'primary' | 'secondary' | 'tertiary' | 'destructive' | 'link-primary' | 'link-secondary'
        </li>
        <li>
          <strong>size:</strong> 'small' | 'medium' | 'large' | 'xlarge' | 'x2large'
        </li>
        <li>
          <strong>icon:</strong> 'left' | 'right' | 'both' | 'only' | 'none'
        </li>
        <li>
          <strong>disabled:</strong> boolean
        </li>
        <li>
          <strong>onClick:</strong> () =&gt; void
        </li>
        <li>
          <strong>children:</strong> React.ReactNode
        </li>
        <li>
          <strong>aria:</strong> string
        </li>
      </ul>
      <div>
        <form>
          <div className={styles.container__inputs}>
            
            <Input 
              label={'Username'} 
              placeholder={'Enter your username'}
              name={'username'}
            />
            <Input 
              label={"Password"} 
              placeholder={'Enter your password'}
              name={'password'}
              type={'password'}
            />
            <Input 
              label={"Email"} 
              placeholder={'Enter your email'}
              type={'email'}
              name={'email'}
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
              label={"Address"} 
              placeholder={'Enter your address'}
            />
            <Input 
              label={"City"} 
              placeholder={'Enter your city'}
            />
            <Input 
              label={"State"} 
              placeholder={'Enter your state'}
            />
            <Input 
              label={"Zip"} 
              placeholder={'Enter your zip code'}
            />
            <Input 
              label={"Country"} 
              placeholder={'Enter your country'}
            />
          </div>
          <div className={styles.container__inputs}>
            <Input 
              label={"Amount"} 
              placeholder={'Enter the amount'}
            />
            <Input 
              label={"Dates"} 
              placeholder={'Enter the dates'}
            />
          </div>
        </form>
      </div>
    </>
  )
}

export default InputIndex
