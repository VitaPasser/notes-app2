import { AiOutlineDelete } from 'react-icons/ai'

import { useActions } from '../../../../hooks/useActions'
import type Prop from '../buttonProp.interface'

export default function NoteDeleteButton({ note }: Prop) {
  const { deleteNote } = useActions()

  return (
    <button onClick={() => deleteNote(note)}>
      <AiOutlineDelete />
    </button>
  )
}
