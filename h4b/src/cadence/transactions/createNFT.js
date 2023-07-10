const createNFT = `

import BasicNFT from 0xc977481970d00fff

transaction (url: String){

  prepare(acct: AuthAccount) {
    
    BasicNFT.appendURL(url)

    acct.save(<-BasicNFT.createNFT(url: url), to: /storage/BasicNFTPath)
    acct.link<&BasicNFT.NFT{BasicNFT.NFTPublic}>(/public/BasicNFTPath, target: /storage/BasicNFTPath)
  
  }

  execute {
    log("NFT Created!")
  }
}
`
export default createNFT