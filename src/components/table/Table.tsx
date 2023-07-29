import styles from './Table.module.css'

interface Prop {
  elements: Array<any>
  children: CallableFunction
}

export default function Table({ elements, children }: Prop) {
  return (
    <div className={styles.item}>
      {elements.map((element, i) => (
        <div key={i}>{children(element)}</div>
      ))}
    </div>
  )
}
