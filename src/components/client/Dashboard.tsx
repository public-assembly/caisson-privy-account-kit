import { useAlchemyContext } from '@/context'
import { usePrivy } from '@privy-io/react-auth'

export function Dashboard() {
  const { smartAccountAddress } = useAlchemyContext()
  const { user } = usePrivy()

  return (
    <div className="p-4 w-full">
      <div>
        <span className="font-semibold">Smart account address:</span>{' '}
        {smartAccountAddress
          ? smartAccountAddress
          : 'Trouble finding smart account'}
      </div>
      <div>
        <span className="font-semibold">Embedded wallet:</span>{' '}
        {user ? user.wallet?.address : 'Trouble finding connected user'}
      </div>
    </div>
  )
}
