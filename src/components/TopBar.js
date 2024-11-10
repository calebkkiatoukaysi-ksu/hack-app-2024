import React from 'react'
import LogOut from '../components/LogOutButton'

const TopBar = () => {
  return (
    <div  className="box-border flex justify-between items-center px-4 py-2 bg-red-400 text-white shadow-md">
      <div className="text-lg font-semibold">
        Kaysi!
      </div>
      <LogOut/>
    </div>
  )
}

export default TopBar
