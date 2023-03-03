
import './App.css';
import Header from './myComponents/Header'
import { Todos } from './myComponents/Todos';
import { Footer } from './myComponents/Footer';
import { AddTodo } from "./myComponents/AddTodo";
import { About } from "./myComponents/About";
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


// we use {} for import if we use dont use export default in js file 

function App() {
  // check any todo is present or not when reload
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am on Delete.", todo);
    // Deleting this way in react is not work 
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);

    // use filter instead 
    // array me vo element sreturn krega jo select nhi kre
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));

    localStorage.setItem("todos", JSON.stringify(todos));

  }

  const addTodo = (title, desc) => {
    console.log("i am adding this to TODO list", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

    // localStorage.setItem("todos",JSON.stringify(todos)); // store in local storage
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  // {
  //   sno: 1,
  //   title: 'Go to Market',
  //   desc: 'buy books, vegetables, snacks...etc'
  // },
  // {
  //   sno: 2,
  //   title: 'Go to Gym',
  //   desc: 'Leg day today be prapare'
  // },
  // {
  //   sno: 3,
  //   title: 'Study ',
  //   desc: 'Complete 5 ques today'
  // }
  // {/* when evere we return some we close that in angular brackets */}

  return (
    <>
      <Router>
        <Header title="My Todo List" searchBar={false} />
        <Switch>
          <Route exact path="/" render={()=>{
            return(
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
