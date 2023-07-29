import type { INote } from '../../../../@types/note.interface'

import NoteArchiveButton from './archive/NoteArchiveButton'
import NoteDeleteButton from './delete/NoteDeleteButton'
import NoteEditButton from './edit/NoteEditButton'
import styles from './Note.module.css'

interface Prop {
  note: INote
}

export default function Note({ note }: Prop) {
  return (
    <div className={styles.item}>
      <div>{note.id}</div>
      <div>{note.category.name}</div>
      <div>{note.created_at}</div>
      <div>{note.content}</div>
      {note.date.map((date, i) => (
        <div key={i}>{date}</div>
      ))}
      <NoteEditButton />
      <NoteArchiveButton note={note} />
      <NoteDeleteButton note={note} />
    </div>
  )
}
