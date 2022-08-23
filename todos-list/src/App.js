import './App.css';
import Header from "./components/Header";
import { TodoList } from "./components/TodoList";
import { Footer } from "./components/Footer";
import { React, useState, useEffect } from 'react';
import { AddTodo } from './components/AddTodo';
import { About } from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// when export is done using default keyword, you can import directly as in Header
// when export is done using const keyword, you can import using {Footer} as in Footer

function App() {
  let initialTodoList;

  if (localStorage.getItem("todos") === null) {
    initialTodoList = [];
  }
  else {
    initialTodoList = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("Called onDelete() in App.js", todo);
    // to delete from todos, we declare todos itself as something called usestate
    // to change the state of todos (add/delete), we call setTodos defined as in usestate

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
  }

  const addTodo = (title, description) => {
    console.log("Adding using addTodo func", title, description);
    let index = 1;
    if (todos.length !== 0) {
      index = todos[todos.length - 1].index + 1;
    }
    const newTodo = {
      index: index,
      title: title,
      desc: description
    }
    console.log("Added", newTodo);

    setTodos([...todos, newTodo]); // making an array of todos using ... and then adding the newTodo, this does not gets added instantly
  }

  let searchBar = true;
  const [todos, setTodos] = useState(initialTodoList);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]) // this basically says that whenever there is change in todos after using useState, call this line of code (here localStorage.setItem)


  return (
    <>
      <Router>
        <Header title="Title from Appjs to Headerjs" searchBar={searchBar} />
        <Routes>
          <Route path="/" element={<> <AddTodo addTodo={addTodo} /> <TodoList todos={todos} onDelete={onDelete} /> </>} />
          <Route path="about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
