import type { ICategory } from './category.interface'

export interface INote {
  id: number
  created_at: string
  content: string
  category: ICategory
  date: Array<string>
  archived: boolean
}
