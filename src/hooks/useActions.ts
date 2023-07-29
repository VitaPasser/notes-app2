import type { ActionCreatorsMapObject } from '@reduxjs/toolkit'
import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'

import { actions } from '../redux/notes/notes.slice'

import { useAppDispatch } from '../redux/hooks'

const rootActions: ActionCreatorsMapObject<any> = { ...actions }

export const useActions = () => {
  const dispatch = useAppDispatch()

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}