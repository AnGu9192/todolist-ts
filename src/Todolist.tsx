import React from 'react'
import { FilterValuesTypes } from './App'

export type TaskType = {
    id: number
    title: string
    isDone: boolean

}
type PropsType ={
    title: string
    tasks: Array<TaskType>
    removeTask: (id:number) => void
    changeFilter: (value: FilterValuesTypes) => void
}
export function Todolist(props: PropsType){
    return (
      <div>
        <h3>{props.title}</h3>
        <div>
          <input />
          <button>+</button>
        </div>
        <ul>
          {
            props.tasks.map(t =>
                <li>
                  <input type="checkbox" checked={t.isDone}/>
                  <span>{t.title}</span>
                  <button onClick={() => {
                    props.removeTask(t.id);
                  }}>x</button>
                </li>
              )
            }
          

        </ul>
        <div>
          <button onClick={() => {props.changeFilter("all")}}>All</button>
          <button onClick={() => {props.changeFilter("active")}}>Actives</button>
          <button onClick={() => {props.changeFilter("complated")}}>Complated</button>
  
        </div>
      </div>
    )
  
  }
  
