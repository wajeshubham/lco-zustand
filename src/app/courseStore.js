import create from "zustand";
import { devtools, persist } from "zustand/middleware";

const courseStore = (set) => ({
  courses: [], // initial state
  addCourse: (course) => {
    // set is a function that allows you to update the state
    // by giving you access to the current state
    set((state) => ({
      courses: [course, ...state.courses],
    }));
  },
  removeCourse: (courseId) => {
    set((state) => ({
      courses: state.courses.filter((c) => c.id !== courseId),
    }));
  },
  toggleCourseStatus: (courseId) => {
    set((state) => ({
      courses: state.courses.map((course) =>
        course.id === courseId
          ? { ...course, completed: !course.completed }
          : course
      ),
    }));
  },
});

// middlewares are optional
const useCourseStore = create(
  // devtools middleware allows you to see the state changes in the browser inside redux devtools
  devtools(
    // persist middleware allows you to persist the state in local storage
    // (using is everywhere is not a good practice)
    persist(courseStore, {
      name: "courses", // name of the key in local storage
    })
  )
);

export default useCourseStore;
