import { useAppSelector } from '../../redux/hooks'
import Table from '../table/Table'

export default function Notes() {
  const { notes } = useAppSelector((state) => state)

  return (
    <>
      <Table elements={notes} />
    </>
  )
}
