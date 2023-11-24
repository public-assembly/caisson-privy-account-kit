import { usePrivy } from '@privy-io/react-auth'

export function Login() {
  const { login, logout, authenticated } = usePrivy()

  return !authenticated ? (
    <button type="button" onClick={login} className="hover:text-black/50">
      Login
    </button>
  ) : (
    <button type="button" onClick={logout} className="hover:text-black/50">
      Logout
    </button>
  )
}
