import React, { useState } from "react";
import useCourseStore from "../app/courseStore";

const CourseForm = () => {
  // By accessing addCourse via state.addCourse, this component will only be rendered if addCourse is called.
  // If any part of the state changes, this component will not be rerendered
  const addCourse = useCourseStore((state) => state.addCourse);

  const [courseTitle, setCourseTitle] = useState("");

  console.log("CourseForm rendered");

  const handleCourseSubmit = () => {
    if (!courseTitle) return alert("Please enter a course title");
    addCourse({
      id: Math.ceil(Math.random() * 1000000),
      title: courseTitle,
    });
    setCourseTitle("");
  };

  return (
    <div className="flex justify-center items-center gap-0 w-[100%]">
      <input
        className="p-2 outline-none border-[1px] border-gray-400 w-72"
        value={courseTitle}
        onChange={(e) => {
          setCourseTitle(e.target.value);
        }}
      />
      <button
        className="bg-gray-500 p-2 font-semibold text-white border-[1px] border-gray-500"
        onClick={() => {
          handleCourseSubmit();
        }}
      >
        Add course
      </button>
    </div>
  );
};

export default CourseForm;
