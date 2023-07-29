import type { INote } from '../../../@types/note.interface'

import Note from './note/Note'
import styles from './Table.module.css'

interface Prop {
  elements: Array<INote>
}

export default function Table({ elements }: Prop) {
  return (
    <div className={styles.item}>
      {elements.map((element, i) => (
        <Note key={i} note={element} />
      ))}
    </div>
  )
}
