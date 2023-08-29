import { createSlice } from '@reduxjs/toolkit'

import type { INote } from '../../../@types/note.interface'
import { categoriesSlice } from '../categories/categories.slice'

const category = categoriesSlice.getInitialState()[0]

interface IArrayNote {
  data: Array<INote>
  nextUniqId: number
}

const initialState: IArrayNote = {
  data: [
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
  ],
  nextUniqId: 3,
}

export const notesSlice = createSlice({
  initialState,
  name: 'notes',
  reducers: {
    addNote: (state, { payload: note }) => {
      state.data.push(note)
    },
    archiveNote: (state, { payload: note }) => {
      const archivedNote = { ...note, archived: !note.archived }
      state.data = state.data.map((element) =>
        element.id === archivedNote.id ? archivedNote : element
      )
    },
    deleteNote: (state, { payload: note }) => {
      const index = state.data.findIndex((item) => item.id === note.id)
      state.data.splice(index, 1)
    },
    editNote: (state, { payload: newNote }) => {
      state.data = state.data.map((note) =>
        note.id === newNote.id ? newNote : note
      )
    },
  },
})

export const { actions, reducer } = notesSlice
