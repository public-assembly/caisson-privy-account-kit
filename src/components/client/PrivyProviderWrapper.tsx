import * as React from 'react'
import { PrivyProvider } from '@privy-io/react-auth'
import { optimism, optimismGoerli } from 'viem/chains'

export function PrivyProviderWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID as string}
      config={{
        loginMethods: ['wallet', 'email', 'google', 'twitter'],
        appearance: {
          theme: 'light',
          logo: 'https://bafybeifnq4ejo7hyk6oqgmahpd2asaseu6e33pog3mtjxhlx3tsstklzh4.ipfs.nftstorage.link/caisson_wordmark.svg',
          showWalletLoginFirst: false,
        },
        embeddedWallets: {
          createOnLogin: 'all-users',
          noPromptOnSignature: true,
        },
        defaultChain: optimismGoerli,
      }}
    >
      {children}
    </PrivyProvider>
  )
}
