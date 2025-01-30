import React from 'react'
import Sidebar from '../components/Sidebar'
import Rightsidebar from '../components/Rightsidebar'
import Main from '../components/Main'

const Home = () => {
  return (
  <main className='w-[100%] flex items-center mt-2 abso'>
      <Sidebar/>
      <Main/>
      <Rightsidebar/>
  </main>
  )
}

export default Home
