import NoteCreateButton from './buttons/create/Note'
import Notes from './notes/Notes'

export default function App() {
  return (
    <main className="App">
      <header className="App-header">
        <h1>Helloooooo!</h1>
        <NoteCreateButton />
        <Notes />
      </header>
    </main>
  )
}
