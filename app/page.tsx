"use client"
import React from 'react'
import Courseform from './components/Courseform'
import Courselist from './components/Courselist'


const page:React.FC = () => {
 
  return (
   <div>
     <Courseform/>
     <Courselist/>
   </div>
  )
}

export default page