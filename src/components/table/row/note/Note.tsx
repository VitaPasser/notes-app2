import type { INote } from '../../../../../@types/note.interface'
import NoteArchiveButton from '../../../buttons/button-icons/archive/NoteArchiveButton'
import NoteDeleteButton from '../../../buttons/button-icons/delete/NoteDeleteButton'
import NoteEditButton from '../../../buttons/button-icons/edit/NoteEditButton'
import styles from '../Row.module.css'

interface Prop {
  note: INote
  key: number
}

export default function Note({ note, key }: Prop) {
  return (
    <tr key={key} className={styles.item}>
      <td>{note.created_at}</td>
      <td>{note.category.name}</td>
      <td>{note.content}</td>
      <td>
        {note.date.map((date) => {
          return date
        })}
      </td>
      <td>
        <NoteEditButton />
      </td>
      <td>
        <NoteArchiveButton note={note} />
      </td>
      <td>
        <NoteDeleteButton note={note} />
      </td>
    </tr>
  )
}
