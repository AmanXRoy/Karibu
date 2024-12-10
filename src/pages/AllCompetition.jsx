import React from 'react'
import Banner from '../components/all-competition/Banner'
import CompetitionList from '../components/all-competition/CompetitionList'
import Paginator from '../components/base/Paginator'

function AllCompetition() {
  return (
    <div className=''>
      <Banner />
      <CompetitionList />
      <Paginator totalPages={3} active={2} />
    </div>
  )
}

export default AllCompetition