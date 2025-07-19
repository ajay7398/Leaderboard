import React from 'react'
import Header from '../components/Header'
import Leaderboard from '../components/Leaderboard'
import ClaimBox from '../components/ClaimBox'
import ClaimHistory from '../components/ClaimHistory'

function Home() {
  return (
    <div className='lg:w-[80%] w-full mx-auto'>
     <Header/>
     <div className='flex flex-col lg:flex-row lg:items-start gap-10 items-center'>
 <Leaderboard/>
 <ClaimBox/>
     </div>
     <ClaimHistory/>
    
    </div>
  )
}

export default Home
