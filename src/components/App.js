
import "../styles/App.css";
import Banner from "./Banner";
import ToDoList from "./ToDoList";

function App() {
  return (
    <div className="App">
      <Banner>
        Liste de courses
      </Banner>
      <div className="Main">
        <ToDoList></ToDoList>
      </div>
    </div>
  );
}

export default App
