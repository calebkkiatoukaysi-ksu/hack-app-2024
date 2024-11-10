import React from 'react'
import TopBar from '../components/TopBar'
import MainBox from '../components/MainBox'

const Home = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-blue-500 to-green-500">
      <TopBar/>
      <MainBox/>
    </div>
  )
}

export default Home
