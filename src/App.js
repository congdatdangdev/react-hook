import "./App.css";
import Nav from "./views/Nav";
import { useState, Fragment } from "react";
import Todo from "./views/Todo";
import Covid from "./views/Covid";
import { CountDown, NewCountDown } from "./views/Countdown";
import Blog from "./views/Blog";
import DetailBlog from "./views/DetailBlog";
import AddNewBlog from "./views/AddNewBlog";
import NotFound from "./views/NotFound";
import YoutubeSearch from "./views/YoutubeSearch";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function App() {
  let [name, setName] = useState("");

  const handleOnchangeInput = (event) => {
    setName(event.target.value);
  };

  const [todos, setTodos] = useState([
    { id: "todo1", title: "React-Redux Basic 1", type: "Cd9" },
    { id: "todo2", title: "React-Redux Basic 2", type: "Cd9" },
    { id: "todo3", title: "React-Redux Basic 3", type: "Cd9" },
    { id: "todo4", title: "React-Redux Basic 4", type: "KBC" },
  ]);

  const handleOnclick = () => {
    if (!name) {
      alert("Emtpy input ");
      return;
    }

    let newTodo = { id: Math.floor(Math.random() * 1001), title: name };
    setTodos([...todos, newTodo]);
    setName("");
  };

  const deleteDataTodo = (id) => {
    let currentTodos = todos;
    currentTodos = todos.filter((item) => item.id !== id);
    setTodos(currentTodos);
  };

  const onTimesup = () => {
    alert("times up");
  };
  return (
    <div className="App">
      <Router>
        <Nav />
        <h1>Hello React Hooks basic </h1>
        <Fragment>
          <Routes>
            <Route exact path="/" element={<Covid />} />
            <Route
              exact
              path="/time"
              element={
                <>
                  <CountDown onTimesup={onTimesup} />
                  <span>----------------------</span>
                  <NewCountDown onTimesup={onTimesup} />
                </>
              }
            />
            <Route
              exact
              path="/todo"
              element={
                <>
                  <Todo
                    todos={todos}
                    title={"All todo"}
                    deleteDataTodo={deleteDataTodo}
                  />

                  <Todo
                    todos={todos.filter((item) => item.type === "Cd9")}
                    title={"Cd9's todo"}
                    deleteDataTodo={deleteDataTodo}
                  />
                  <div>
                    <input
                      type="text"
                      value={name}
                      onChange={(event) => handleOnchangeInput(event)}
                    />
                    <button onClick={() => handleOnclick()}>Submit</button>
                  </div>
                </>
              }
            />
            <Route exact path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<DetailBlog />} />
            {/* <NewCountDown /> */}
            <Route path="/blog/add-new-blog" element={<AddNewBlog />} />

            <Route path="/secret" element={<YoutubeSearch />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
