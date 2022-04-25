import "./App.css";
import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";

const App = () => {
  return (
    <div className="p-10 h-[100vh] w-[100vw] bg-gray-100 flex flex-col justify-start items-center">
      <h1 className="text-4xl font-bold mb-10">My todo courses</h1>
      <CourseForm />
      <CourseList />
    </div>
  );
};

export default App;
