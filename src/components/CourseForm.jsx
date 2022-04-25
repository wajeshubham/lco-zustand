import React, { useState } from "react";
import shallow from "zustand/shallow";
import useCourseStore from "../app/courseStore";

const CourseForm = () => {
  // using shallow this will render this component only and only if addCourse is called
  // It will not rerender this component if any other part of the state changes
  const addCourse = useCourseStore((state) => state.addCourse, shallow);

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
