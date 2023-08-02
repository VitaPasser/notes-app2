import type { INote } from '../../../../@types/note.interface'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import Note from '../../table/row/note/Note'
import Table from '../../table/Table'
import NotesHeader from '../NotesHeader'

export default function ArchivedNotes() {
  const { notes } = useTypedSelector((state) => state)
  const archivedNotes = notes.filter((note) => note.archived)
  return (
    <>
      <Table elements={archivedNotes} header={NotesHeader()}>
        {(note: INote, key: number) => <Note note={note} key={key} />}
      </Table>
    </>
  )
}
