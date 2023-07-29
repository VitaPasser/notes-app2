import { createSlice } from '@reduxjs/toolkit'

import type { ICategory } from '../../../@types/category.interface'

const initialState: Array<ICategory> = [{ id: 0, name: 'Task' }]

export const categoriesSlice = createSlice({
  initialState,
  name: 'categories',
  reducers: {
    addCategory: (state, { payload: category }) => {
      state.push(category)
    },
  },
})

export const { actions, reducer } = categoriesSlice
