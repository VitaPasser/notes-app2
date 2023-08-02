import type { ActionCreatorsMapObject } from '@reduxjs/toolkit'
import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'

import { actions as categoriesActions } from '../redux/categories/categories.slice'
import { actions as notesActions } from '../redux/notes/notes.slice'

import { useTypedDispatch } from './useTypedDispatch'

const rootActions: ActionCreatorsMapObject<any> = {
  ...notesActions,
  ...categoriesActions,
}

export const useActions = () => {
  const dispatch = useTypedDispatch()

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
