import type { ICategory } from '../../../../../@types/category.interface'
import styles from '../Row.module.css'

interface ICountedProps {
  category: ICategory
  count: number
}

export default function Counted({ category, count }: ICountedProps) {
  return (
    <tr className={styles.item}>
      <td>{category.name}</td>
      <td>{count}</td>
    </tr>
  )
}
