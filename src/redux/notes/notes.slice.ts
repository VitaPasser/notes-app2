import { createSlice } from '@reduxjs/toolkit'

import type { INote } from '../../../@types/note.interface'
import { categoriesSlice } from '../categories/categories.slice'

const category = categoriesSlice.getInitialState()[0]

// interface IArrayNote  {
//   array : Array<INote>
// }

const initialState: Array<INote> = [
  {
    archived: false,
    category,
    content: 'Some note',
    created_at: new Date().toJSON(),
    date: [],
    id: 0,
  },
  {
    archived: false,
    category,
    content: 'Some note too',
    created_at: new Date().toJSON(),
    date: [],
    id: 1,
  },
  {
    archived: false,
    category,
    content: 'Some note too',
    created_at: new Date().toJSON(),
    date: [new Date().toJSON(), new Date().toJSON()],
    id: 2,
  },
]

export const notesSlice = createSlice({
  initialState,
  name: 'notes',
  reducers: {
    addNote: (state, { payload: note }) => {
      state.push(note)
    },
    archiveNote: (state, { payload: note }) => {
      const archivedNote = { ...note, archived: !note.archived }
      return state.map((element) =>
        element.id === archivedNote.id ? archivedNote : element
      )
    },
    deleteNote: (state, { payload: note }) => {
      const index = state.findIndex((item) => item.id === note.id)
      state.splice(index, 1)
    },
    editNote: (state, { payload: newNote }) => {
      return state.map((note) => (note.id === newNote.id ? newNote : note))
    },
  },
})

export const { actions, reducer } = notesSlice
