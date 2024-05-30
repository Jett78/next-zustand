"use client"
import React,{useState} from 'react'
import useCourseStore from "./zustand/CourseStore"

const page:React.FC = () => {
  const bears = useCourseStore((state:any)=> state.bears)
  const increasePopulation = useCourseStore((state:any) => state.increasePopulation)
  const resetPopulation = useCourseStore((state:any)=> state.resetPopulation)
  return (
    <div>
      <h1>{bears} around here</h1>
      <button onClick={increasePopulation}>one up</button>
      <button onClick={resetPopulation}>one up</button>
    </div>
  )
}

export default page