import React from 'react'
import UpperBanner from '../components/home/UpperBanner'
import Guide from '../components/home/Guide'
import Services from '../components/home/Services'
import ChampionSection from '../components/home/ChampionSection'
import NextDraw from '../components/home/NextDraw'
import NewsLetter from '../components/home/NewsLetter'

function Home() {
  return (
    <div>
        <UpperBanner />
        <Guide />
        <Services />
        <ChampionSection />
        <NextDraw />
        <NewsLetter />
    </div>
  )
}

export default Home