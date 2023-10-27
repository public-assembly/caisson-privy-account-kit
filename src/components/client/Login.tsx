import { useLogin } from '@privy-io/react-auth'

export function Login() {
  const { login } = useLogin()

  return (
    <button type="button" onClick={login} className="hover:text-black/50">
      Login
    </button>
  )
}
