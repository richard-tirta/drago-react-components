
import Button from "./Button";
import styles from './ButtonIndex.module.scss'

const ButtonIndex = () => {


  return (
    <>
      <h2>Buttons</h2>
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
      <div className={styles.container__buttons}>
        <h3>Primary:</h3>
        <Button onClick={() => window.open('https://richardtirta.com')} type={'primary'} size="small" icon={'both'}>
          Button CTA
        </Button>
        <Button onClick={() => window.open('https://richardtirta.com')} type={'primary'} size="medium">
          Button CTA
        </Button>
        <Button onClick={() => window.open('https://richardtirta.com')} type={'primary'} size="large" disabled={true}>
          Button CTA
        </Button>
        <Button onClick={() => window.open('https://richardtirta.com')} type={'primary'} size="xlarge" icon={'left'}>
          Button CTA
        </Button>
        <Button onClick={() => window.open('https://richardtirta.com')} type={'primary'} size="x2large" icon={'right'}>
          Button CTA
        </Button>
      </div>
      <div className={styles.container__buttons}>
        <h3>Secondary:</h3>
        <Button onClick={() => window.open('https://richardtirta.com')} type={'secondary'} size="small" icon={'both'}>
          Button CTA
        </Button>
        <Button onClick={() => window.open('https://richardtirta.com')} type={'secondary'} size="medium">
          Button CTA
        </Button>
        <Button onClick={() => window.open('https://richardtirta.com')} type={'secondary'} size="large" disabled={true}>
          Button CTA
        </Button>
        <Button onClick={() => window.open('https://richardtirta.com')} type={'secondary'} size="xlarge" icon={'left'}>
          Button CTA
        </Button>
        <Button onClick={() => window.open('https://richardtirta.com')} type={'secondary'} size="x2large" icon={'right'}>
          Button CTA
        </Button>
      </div>
      <div className={styles.container__buttons}>
        <h3>Tertiary:</h3>
        <Button onClick={() => window.open('https://richardtirta.com')} type={'tertiary'} size="small" icon={'both'}>
          Button CTA
        </Button>
        <Button onClick={() => window.open('https://richardtirta.com')} type={'tertiary'} size="medium">
          Button CTA
        </Button>
        <Button onClick={() => window.open('https://richardtirta.com')} type={'tertiary'} size="large" disabled={true}>
          Button CTA
        </Button>
        <Button onClick={() => window.open('https://richardtirta.com')} type={'tertiary'} size="xlarge" icon={'left'}>
          Button CTA
        </Button>
        <Button onClick={() => window.open('https://richardtirta.com')} type={'tertiary'} size="x2large" icon={'right'}>
          Button CTA
        </Button>
      </div>
      <div className={styles.container__buttons}>
        <h3>Destructive:</h3>
        <Button onClick={() => window.open('https://richardtirta.com')} type={'destructive'} size="small" icon={'both'}>
          Button CTA
        </Button>
        <Button onClick={() => window.open('https://richardtirta.com')} type={'destructive'} size="medium">
          Button CTA
        </Button>
        <Button onClick={() => window.open('https://richardtirta.com')} type={'destructive'} size="large" disabled={true}>
          Button CTA
        </Button>
        <Button onClick={() => window.open('https://richardtirta.com')} type={'destructive'} size="xlarge" icon={'left'}>
          Button CTA
        </Button>
        <Button onClick={() => window.open('https://richardtirta.com')} type={'destructive'} size="x2large" icon={'right'}>
          Button CTA
        </Button>
      </div>
      <div className={styles.container__buttons}>
        <h3>Link Primary:</h3>
        <Button onClick={() => window.open('https://richardtirta.com')} type={'link-primary'} size="small" icon={'both'}>
          Button CTA
        </Button>
        <Button onClick={() => window.open('https://richardtirta.com')} type={'link-primary'} size="medium">
          Button CTA
        </Button>
        <Button onClick={() => window.open('https://richardtirta.com')} type={'link-primary'} size="large" disabled={true}>
          Button CTA
        </Button>
        <Button onClick={() => window.open('https://richardtirta.com')} type={'link-primary'} size="xlarge" icon={'left'}>
          Button CTA
        </Button>
        <Button onClick={() => window.open('https://richardtirta.com')} type={'link-primary'} size="x2large" icon={'right'}>
          Button CTA
        </Button>
      </div>
      <div className={styles.container__buttons}>
        <h3>Link Secondary:</h3>
        <Button onClick={() => window.open('https://richardtirta.com')} type={'link-secondary'} size="small" icon={'both'}>
          Button CTA
        </Button>
        <Button onClick={() => window.open('https://richardtirta.com')} type={'link-secondary'} size="medium">
          Button CTA
        </Button>
        <Button onClick={() => window.open('https://richardtirta.com')} type={'link-secondary'} size="large" disabled={true}>
          Button CTA
        </Button>
        <Button onClick={() => window.open('https://richardtirta.com')} type={'link-secondary'} size="xlarge" icon={'left'}>
          Button CTA
        </Button>
        <Button onClick={() => window.open('https://richardtirta.com')} type={'link-secondary'} size="x2large" icon={'right'}>
          Button CTA
        </Button>
      </div>
    </>
  )
}

export default ButtonIndex
