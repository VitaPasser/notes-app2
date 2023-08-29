import { useState } from 'react'

import type { ICategory } from '../../../@types/category.interface'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'

export default function Create() {
  const { categories, notes } = useTypedSelector((state) => state)
  const { addNote } = useActions()

  const [content, setContent] = useState<string>('')
  const [category, setCategory] = useState<ICategory | undefined>(undefined)

  return (
    <div>
      <form
        onSubmit={() => {
          addNote({
            archived: false,
            category: category !== undefined ? category : { id: 0, name: '' },
            content,
            created_at: new Date().toDateString(),
            date: [],
            id: notes.nextUniqId,
          })
        }}
      >
        <label>
          Content:
          <textarea
            name="content"
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </label>
        <label>
          Category:
          <select
            onChange={(e) =>
              setCategory(
                categories.find(
                  (element) => element.id === Number(e.target.value)
                )
              )
            }
          >
            {categories.map((element) => (
              <option value={element.id}>{element.name}</option>
            ))}
          </select>
        </label>
        <input type="submit" value="Create" />
      </form>
    </div>
  )
}
