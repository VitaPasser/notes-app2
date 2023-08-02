import type { Dispatch, SetStateAction } from 'react'

import styles from '../Button.module.css'

interface Prop {
  archivesState: [boolean, Dispatch<SetStateAction<boolean>>]
}

export default function ArchivesNoteButton({ archivesState }: Prop) {
  const [isArchives, setIsArchives] = archivesState
  return (
    <button
      className={styles.button}
      onClick={() => setIsArchives(!isArchives)}
    >
      Archives
    </button>
  )
}
