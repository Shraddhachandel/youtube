import React from 'react'
import Sidebar from './Sidebar'
import MainContiner from './MainContainer'

const Body = () => {
  return (
    <div className="flex">
        <Sidebar/>
        <MainContiner/>

    </div>
  )
}

export default Body;