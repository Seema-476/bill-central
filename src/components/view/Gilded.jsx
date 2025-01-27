import React from 'react'
import Hero from '../gilded/Hero'
import NftUtility from '../gilded/NftUtility'
import PlayToEarn from '../gilded/PlayToEarn'
import GamingPlatform from '../gilded/GamingPlatform'
import TokenInfo from '../gilded/TokenInfo'
import Roadmap from '../gilded/Roadmap'
import Uniswap from '../gilded/Uniswap'
import PoweredBy from '../gilded/PoweredBy'
import BackToTop from '../../common/BackToTop'

const Gilded = () => {
    return (
        <>
            <Hero />
            <NftUtility />
            <PlayToEarn />
            <GamingPlatform />
            <TokenInfo />
            <Roadmap />
            <Uniswap />
            <PoweredBy />
            <BackToTop/>
        </>
    )
}

export default Gilded