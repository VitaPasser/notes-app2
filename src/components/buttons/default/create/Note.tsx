import type { ICategory } from '../../../../../@types/category.interface'
import type { INote } from '../../../../../@types/note.interface'
import { useActions } from '../../../../hooks/useActions'
import styles from '../Button.module.css'

const category: ICategory = { id: 1, name: 'Some thing' }

const note: INote = {
  archived: false,
  category,
  content: 'Some note 3',
  created_at: new Date().toJSON(),
  date: [],
  id: 3,
}

export default function CreateNoteButton() {
  const { addNote } = useActions()
  const { addCategory } = useActions()

  return (
    <button
      className={styles.button}
      onClick={() => {
        addNote(note)
        addCategory(category)
      }}
    >
      Create
    </button>
  )
}
