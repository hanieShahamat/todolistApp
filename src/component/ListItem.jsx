import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faPenToSquare,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import EditItem from "./EditItem";
import DeleteItem from "./DeleteItem";

export default function ListItem(props) {
  const { todo } = props; // شکستن یک آبجکت
  const [isTrashClick, setisTrashClick] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const handleClick = () => {
    console.log(props.todo);
  };
  return (
    <>
      <li className="grid grid-cols-[1fr_24px] items-center gap-6 border-b-2 border-neutral-200 pb-4">
        <label
          htmlFor=""
          className="peer grid grid-cols-[auto_1fr] items-center gap-3 rounded-md pl-2 hover:bg-slate-100"
        >
          <input
            type="checkbox"
            className="peer size-3.5 appearance-none rounded-sm border border-slate-300 accent-orange-600 dark:accent-orange-700 checked:appearance-auto"
          />
          <span className="select-none text-slate-700 peer-checked:text-slate-400 peer-checked:line-through">
            {todo.title}
          </span>
        </label>
        <div className="flex btn">
          <button
            className="rounded-sm hover:bg-orange-300 hover:rounded-md mr-2"
            onClick={() => setIsEditDialogOpen(true)}
           
          >
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
          <button
            className="rounded-sm hover:bg-red-300 hover:rounded-md"
            onClick={() => setisTrashClick(true)}
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </div>
        <div className="flex items-center justify-between pl-6 text-sm font-light">
          <span className="text-zinc-500">{todo.description}</span>
          <span className="text-lime-600">
            <FontAwesomeIcon icon={faClock} />
            {todo.date}
          </span>
        </div>
      </li>
      {isTrashClick && <DeleteItem id={todo.id} />}
      {isEditDialogOpen && <EditItem todo={todo} />}
    </>
  );
}
