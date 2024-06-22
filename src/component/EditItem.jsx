import React  from 'react'
import ModalDialog from './ModalDialog'

export default function EditItem(props) {
  return (
    <>
    <ModalDialog todo={props.todo} open={props.open} onModalClose={props.onModalClose}/>
    </>
  )
}
