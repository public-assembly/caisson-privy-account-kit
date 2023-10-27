import { configureChains } from 'wagmi'
import { optimism, optimismGoerli } from 'wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

const alchemyKey = process.env.NEXT_PUBLIC_ALCHEMY_KEY

export const configureChainsConfig = configureChains(
  [optimism, optimismGoerli],
  [alchemyProvider({ apiKey: alchemyKey as string }), publicProvider()],
)
