import { Login } from '@/client'
import { Caisson, Deploy } from '@/server'

export function Header() {
  return (
    <div className="flex justify-between items-center p-4">
      <Caisson />
      <div className="flex items-center gap-8">
        <Deploy />
        <Login />
      </div>
    </div>
  )
}
