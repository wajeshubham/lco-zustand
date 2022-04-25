import "./App.css";
import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";

const App = () => {
  return (
    <div className="main-container">
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "2rem",
        }}
      >
        My todo courses
      </h1>
      <CourseForm />
      <CourseList />
    </div>
  );
};

export default App;
