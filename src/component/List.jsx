import React, { useContext } from 'react'
import ListItem from './ListItem'
import { listContext } from '../App'

export default function List() {
  const {listtodo} = useContext(listContext)
  // const {todoList} = props // const todoList = props.todoList
  
  return (
    <ul className="space-y-3">
        <h2 className="text-base font-semibold text-slate-900 dark:text-slate-200 border-b-2 border-neutral-200 pb-4">My Projects</h2>
        {
          listtodo.map((todo)=>{
            return <ListItem key={todo.id} todo={todo}/>
          })
        }
    </ul>
  )
}
