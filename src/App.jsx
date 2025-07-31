import React from 'react'
import Navbar from './components/Navbar'
import Main_section from './components/Main_section'



function App() {
  // const scroll = scrollReveal({
  //   reset: true,
  //   duration : 2600,da
  //   distance: '60px'
  // })
  
  // scroll.revel('image-transform',{delay:400, origin:'top'})
  // scroll.revel('text-transform',{delay:300, origin:'left'})
  return (
    <div className='bg-[radial-gradient(ellipse_at_right,_skyblue,_indigo)] ' >
      <div className='min-h-screen text-white px-6 py-2 md:px-10 lg:px-16 lg:py-7 flex flex-col gap-2'>
      <Navbar />
      <Main_section />
      </div>
      

   
      
      </div>
  )
  
}

export default App