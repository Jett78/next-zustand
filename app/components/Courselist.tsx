import React, { use } from 'react'
import useCourseStore from '../zustand/CourseStore'

interface Course {
  id: string;
  title: string;
  status: boolean;
}
const Courselist:React.FC = () => {
  const{courses,removeCourse, toggleCourseStatus} = useCourseStore((state) => ({
    courses:state.courses,
    removeCourse:state.removeCourse,
    toggleCourseStatus:state.toggleCourseStatus
  }))
  return (
    <div>
      <div className='grid gap-2 mt-2'>
        {courses.map((course,i) => {
          return <React.Fragment key={i}>
           <div className='flex items-center justify-between p-2 border-2 w-[23em] mx-auto rounded-lg'>
              <input type="checkbox" onChange={(e) => {toggleCourseStatus(course.id)}}/>
             <h2 className='font-semibold text-l'>{course.title}</h2>
             <button onClick={() =>{  removeCourse(course.id)} } className=' border p-2 font-semibold'>Delete</button>
             </div>
          </React.Fragment>
        })}
      </div>
    </div>
  )
}

export default Courselist