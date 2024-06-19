import React from 'react'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function Header() {
  return (
    <header className="flex items-center justify-between text-2xl pb-6 font-medium">
    <h1>Today</h1>
    <FontAwesomeIcon icon={faEllipsisVertical} />
  </header>
  )
}
