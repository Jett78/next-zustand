import { create } from "zustand";
import {devtools,persist} from "zustand/middleware"
const CourseStore = (set) => ({
    courses:[],  //initial state
    addCourse:(course) => {
        set((state) => ({
            courses:[course,...state.courses],
        }))
    },
    removeCourse:(courseId) => {
        set((state) => ({
            courses:state.courses.filter((c) => c.id!==courseId)
        }))
    },
    toggleCourseStatus:(courseId) => {
        set((state) => ({
            courses:state.courses.map((course) => course.id === courseId?{...course,completed:!course.completed}:course)
        }))
    }
})

const useCourseStore = create(
    devtools(
        persist(CourseStore,{
            name:"courses"
        })
    )
)


export default useCourseStore

// const useCourseStore = create((set) => ({
//     bears: 0,
//     increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//     decreasePopulation: () => set((state) => ({ bears: state.bears - 1 })),
//     resetPopulation:() => set((state) => ({bears:state.bears=0}))
// }));

// export default useCourseStore