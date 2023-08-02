import type { ICategory } from '../../../@types/category.interface'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import Counter from '../table/row/counter/Counter'
import Table from '../table/Table'

import CountedHeader from './CountedHeader'

export default function CountedTable() {
  const { categories, notes } = useTypedSelector((state) => state)
  return (
    <>
      <Table elements={categories} header={CountedHeader()}>
        {(category: ICategory) => <Counter notes={notes} category={category} />}
      </Table>
    </>
  )
}
