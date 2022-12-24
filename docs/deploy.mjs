import Bundlr from '@bundlr-network/client'
import { WarpFactory } from 'warp-contracts'
import fs from 'fs'
import Arweave from 'arweave'


const ANT = 'YcUbL7_j2DLxvMX0dqOu8N73mrcCRzovsE5Mw22uLmc'
const arweave = Arweave.init({ host: 'arweave.net', port: 443, protocol: 'https' })
const jwk = JSON.parse(fs.readFileSync('../wallet.json', 'utf-8'))
const bundlr = new Bundlr.default('https://node2.bundlr.network', 'arweave', jwk)
const warp = WarpFactory.forMainnet({ useArweaveGw: true, arweave })
const contract = warp.contract(ANT).connect(jwk)
// upload folder
const result = await bundlr.uploadFolder('./src/.vuepress/dist', {
  indexFile: 'index.html'
})


// update ANT

await contract.writeInteraction({
  function: 'setRecord',
  subDomain: '@',
  transactionId: result.id
})

console.log('Deployed Cookbook, please wait 20 - 30 minutes for ArNS to update!')