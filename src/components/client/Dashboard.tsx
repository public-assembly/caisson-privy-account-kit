import { useAlchemyContext } from '@/context'
import { usePrivy } from '@privy-io/react-auth'

export function Dashboard() {
  const { smartAccountAddress } = useAlchemyContext()

  const { user } = usePrivy()

  return (
    <div className="p-4 w-full">
      <div>
        Smart account address:{' '}
        {smartAccountAddress
          ? smartAccountAddress
          : 'Trouble finding smart account'}
      </div>
      <div>
        Embedded wallet:{' '}
        {user ? user.wallet?.address : 'Trouble finding connected user'}
      </div>
    </div>
  )
}
