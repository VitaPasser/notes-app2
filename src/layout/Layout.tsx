import type { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header>
        <h1>Helloooooo!</h1>
      </header>
      {children}
    </div>
  )
}
