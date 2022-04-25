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
    <div className="form-container">
      <input
        className="form-input"
        value={courseTitle}
        onChange={(e) => {
          setCourseTitle(e.target.value);
        }}
      />
      <button
        className="form-submit-btn"
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
