import type { INote } from '../../../../@types/note.interface'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import Note from '../../table/row/note/Note'
import Table from '../../table/Table'
import NotesHeader from '../NotesHeader'

export default function Notes() {
  const { notes } = useTypedSelector((state) => state)
  const activeNotes = notes.data.filter((note) => !note.archived)
  return (
    <>
      <Table elements={activeNotes} header={NotesHeader()}>
        {(note: INote, key: number) => <Note note={note} key={key} />}
      </Table>
    </>
  )
}
