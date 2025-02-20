import { sonicPublicClient, getNFTs, writeMd } from './veNFT.mjs'

// veEqual on Sonic
const veContractAddress = '0x3045119766352ff250b3d45312bd0973cbf7235a'

  const data = await getNFTs(sonicPublicClient, veContractAddress)

  writeMd(data, 'veEqualSonic.md', 'sonic')
