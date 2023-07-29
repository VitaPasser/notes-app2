import { useState } from 'react'

import ArchivesNoteButton from '../components/buttons/archives/Note'
import CreateNoteButton from '../components/buttons/create/Note'

import ArchivedNotes from './notes/ArchivedNotes'
import Notes from './notes/Notes'

export default function Index() {
  const isArchivesState = useState(false)
  const isArchives = isArchivesState[0]

  return (
    <main>
      <CreateNoteButton />
      <ArchivesNoteButton archivesState={isArchivesState} />
      {isArchives ? <ArchivedNotes /> : <Notes />}
    </main>
  )
}
