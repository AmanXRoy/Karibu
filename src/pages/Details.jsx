import React from 'react'
import DetailsBanner from '../components/details/DetailsBanner'
import CompetitionDescription from '../components/details/CompetitionDescription'
import LotteryDetails from './LotteryDetails'

function Details() {
  return (
    <div className="relative">
        <DetailsBanner />
        <CompetitionDescription />
        {/* <LotteryDetails/> */}
    </div>
  )
}

export default Details