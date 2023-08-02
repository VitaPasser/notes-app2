import { useState } from 'react'

import ArchivesNoteButton from '../../components/buttons/default/archives/Note'
import CreateNoteButton from '../../components/buttons/default/create/Note'
import CountedTable from '../../components/counted/CountedTable'
import Notes from '../../components/notes/active/NotesTable'
import ArchivedNotes from '../../components/notes/archived/ArchivedNotesTable'

export default function Index() {
  const isArchivesState = useState(false)
  const isArchives = isArchivesState[0]

  return (
    <main>
      <CreateNoteButton />
      <ArchivesNoteButton archivesState={isArchivesState} />
      {isArchives ? <ArchivedNotes /> : <Notes />}
      <CountedTable />
    </main>
  )
}
