import styles from './pill.module.css';

function Pill({ text } : { text: string }) {
  return (
    <div className={ styles.pill }>
      <p>{ text }</p>
    </div>
  )
}

export { Pill };