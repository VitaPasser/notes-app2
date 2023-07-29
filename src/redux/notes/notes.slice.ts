import { createSlice } from '@reduxjs/toolkit'

import type { INote } from '../../../@types/note.interface'
import { categoriesSlice } from '../categories/categories.slice'

const category = categoriesSlice.getInitialState()[0]

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
  },
})

export const { actions, reducer } = notesSlice
