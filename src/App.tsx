import React, { useState } from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';

export type FilterValuesTypes = "all" | "complated" | "active"

function App() {

  let [tasks, setTasks] = useState<Array<TaskType>>([
    {id:1, title: "CSS", isDone: true},
    {id:2, title: "Js", isDone: true},
    {id:3, title: "React", isDone: false}

  ]
);
  let [filter, setFilter] = useState<FilterValuesTypes>("all");

  function removeTask(id: number){
  let  filteredTasks = tasks.filter( t => t.id !== id)
    setTasks(filteredTasks);
}

function changeFilter(value:FilterValuesTypes){
  setFilter(value);
}

let tasksForTodoList = tasks;
if(filter === "complated"){
  tasksForTodoList = tasks.filter(t => t.isDone === true);

}
if(filter === "active"){
  tasksForTodoList = tasks.filter(t => t.isDone === false);

}
  
  return (
    <div className="App">
      <Todolist title="What to learn"
       tasks={tasksForTodoList}
       removeTask={removeTask}
       changeFilter={changeFilter}

       />

    </div>
  );
}


export default App;
