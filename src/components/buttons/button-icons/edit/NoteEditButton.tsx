import { AiOutlineEdit } from 'react-icons/ai'

import type { INote } from '../../../../../@types/note.interface'
import { useActions } from '../../../../hooks/useActions'
import { categoriesSlice } from '../../../../redux/categories/categories.slice'

const category = categoriesSlice.getInitialState()[0]

const note: INote = {
  archived: false,
  category,
  content: 'Some note too 2',
  created_at: new Date().toJSON(),
  date: [new Date().toJSON(), new Date().toJSON()],
  id: 1,
}

export default function NoteEditButton() {
  const { editNote } = useActions()

  return (
    <button onClick={() => editNote(note)}>
      <AiOutlineEdit />
    </button>
  )
}
