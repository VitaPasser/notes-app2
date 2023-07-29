import type { INote } from '../../../@types/note.interface'
import Table from '../../components/table/Table'
import { useTypedSelector } from '../../hooks/useTypedSelector'

import Note from './note/Note'

export default function ArchivedNotes() {
  const { notes } = useTypedSelector((state) => state)
  const archivedNotes = notes.filter((note) => note.archived)
  return (
    <>
      <Table elements={archivedNotes}>
        {(note: INote) => <Note note={note} />}
      </Table>
    </>
  )
}
