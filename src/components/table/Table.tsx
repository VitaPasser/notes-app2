import type { ReactNode } from 'react'

import styles from './Table.module.css'

interface Prop {
  elements: Array<any>
  header: ReactNode
  children(element: any, key: number): ReactNode
}

export default function Table({ elements, header, children }: Prop) {
  return (
    <table className={styles.item}>
      <thead>{header}</thead>
      <tbody>
        {elements.map((element, key) => {
          return children(element, key)
        })}
      </tbody>
    </table>
  )
}
