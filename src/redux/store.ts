import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { reducer as categoryReducer } from './categories/categories.slice'
import { reducer as noteReducer } from './notes/notes.slice'

const reducers = combineReducers({
  categories: categoryReducer,
  notes: noteReducer,
})

export const store = configureStore({
  devTools: true,
  reducer: reducers,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
