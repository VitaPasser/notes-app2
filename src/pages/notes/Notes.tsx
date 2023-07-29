import type { INote } from '../../../@types/note.interface'
import Table from '../../components/table/Table'
import { useTypedSelector } from '../../hooks/useTypedSelector'

import Note from './note/Note'

export default function Notes() {
  const { notes } = useTypedSelector((state) => state)
  const activeNotes = notes.filter((note) => !note.archived)
  return (
    <>
      <Table elements={activeNotes}>
        {(note: INote) => <Note note={note} />}
      </Table>
    </>
  )
}
