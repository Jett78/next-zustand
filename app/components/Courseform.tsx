import React, { useState } from "react";
import useCourseStore from "../zustand/CourseStore";

const Courseform: React.FC = () => {
  const addCourse = useCourseStore((state) => state.addCourse);
  const [coursetitle, setCoursetitle] = useState("");
  console.log("Course Rendered");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!coursetitle) alert("Please ad  title");
    addCourse({
      id: Math.ceil(Math.random() * 100000),
      title: coursetitle,
    });
    setCoursetitle("");
  };
  return (
    <div>
      <h2 className="text-center font-bold text-3xl mt-20">My Course List</h2>
      <form action="" className="flex  justify-center items-center mt-6 ">
        <input
          type="text"
          value={coursetitle}
          onChange={(e) => {
            setCoursetitle(e.target.value);
          }}
          className="border outline-none h-10 pl-4"
        />
        <button
          onClick={handleSubmit}
          className="bg-black text-white h-10 w-36 font-semibold"
        >
          Add course
        </button>
      </form>
    </div>
  );
};

export default Courseform;
