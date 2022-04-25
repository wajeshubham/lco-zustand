import React from "react";
import shallow from "zustand/shallow";
import useCourseStore from "../app/courseStore";

const CourseList = () => {
  const { courses, removeCourse, toggleCourseStatus } = useCourseStore(
    (state) => ({
      courses: state.courses,
      removeCourse: state.removeCourse,
      toggleCourseStatus: state.toggleCourseStatus,
    }),
    shallow
  );

  console.log("CourseList rendered");

  return (
    <div className="py-2">
      <ul>
        {courses.map((course, i) => {
          return (
            <React.Fragment key={i}>
              <li
                className={`${
                  course.completed ? "bg-green-300" : "bg-white"
                } flex justify-between font-semibold items-center p-3 rounded-md shadow-md w-96 my-3`}
              >
                <span className="flex justify-start items-center gap-2 ">
                  <input
                    type={"checkbox"}
                    checked={!!course.completed}
                    onChange={(e) => {
                      toggleCourseStatus(course.id);
                    }}
                  />
                  <span>{course?.title}</span>
                </span>
                <span className="flex gap-2">
                  <button
                    className="p-2 text-white bg-red-500 font-semibold rounded-lg"
                    onClick={() => {
                      removeCourse(course.id);
                    }}
                  >
                    Delete
                  </button>
                </span>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default CourseList;
