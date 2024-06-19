import React  from 'react'
import ModalDialog from './ModalDialog'

export default function EditItem(props) {
    // const [list, Editlist] = useState(todoList)
    // let index = list.findIndex((todo)=> todo.id === idEditItem)
  return (
    <>
    <ModalDialog todo={props.todo}/>
    </>
  )
}
