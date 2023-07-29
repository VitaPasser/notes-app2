import { useTypedSelector } from '../../hooks/useTypedSelector'
import Table from '../table/Table'

export default function Notes() {
  const { notes } = useTypedSelector((state) => state)

  return (
    <>
      <Table elements={notes} />
    </>
  )
}
