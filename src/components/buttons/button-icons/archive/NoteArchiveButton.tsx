import { BsArchive } from 'react-icons/bs'

import { useActions } from '../../../../hooks/useActions'
import type Prop from '../buttonProp.interface'

export default function NoteArchiveButton({ note }: Prop) {
  const { archiveNote } = useActions()

  return (
    <button onClick={() => archiveNote(note)}>
      <BsArchive />
    </button>
  )
}
