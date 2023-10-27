'use client'

import * as React from 'react'
import { PrivyProviderWrapper } from '@/client'
import { PrivyWagmiConnector } from '@privy-io/wagmi-connector'
import { configureChainsConfig } from '../privyWagmi'

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])
  return (
    <PrivyProviderWrapper>
      <PrivyWagmiConnector wagmiChainsConfig={configureChainsConfig}>
        {mounted && children}
      </PrivyWagmiConnector>
    </PrivyProviderWrapper>
  )
}
