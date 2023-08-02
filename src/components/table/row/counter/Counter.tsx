import type { ICategory } from '../../../../../@types/category.interface'
import type { INote } from '../../../../../@types/note.interface'

import Counted from './Counted'

interface ICounterProps {
  notes: INote[]
  category: ICategory
  key: number
}

export default function Counter({ notes, category, key }: ICounterProps) {
  const count: number = notes
    .map((note) => {
      return Number(note.category.id === category.id ? 1 : 0)
    })
    .reduce((acc, val) => acc + val, 0)

  return <Counted key={key} category={category} count={count} />
}
