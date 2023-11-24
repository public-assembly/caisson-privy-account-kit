'use client'

import { PrivyProviderWrapper } from '@/client'
import { AlchemyProviderComponent } from '@/context'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PrivyProviderWrapper>
      <AlchemyProviderComponent>{children}</AlchemyProviderComponent>
    </PrivyProviderWrapper>
  )
}
