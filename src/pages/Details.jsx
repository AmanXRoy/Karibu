import React from 'react'
import DetailsBanner from '../components/details/DetailsBanner'
import CompetitionDescription from '../components/details/CompetitionDescription'

function Details() {
  return (
    <div className="relative">
        <DetailsBanner />
        <CompetitionDescription />
    </div>
  )
}

export default Details