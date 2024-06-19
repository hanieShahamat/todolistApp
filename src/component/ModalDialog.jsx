import React, { useState } from "react";
import { Todo } from "../App";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";

export default function ModalDialog({ todo }) {
  const [open, setOpen] = useState(true);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const title = formData?.get("inputTitle");
    const description = formData?.get("inputDescription");
    const date = formData?.get("inputTime");
    let newTodoObject;
    if (!!todo && todo?.id){
      console.log("editmode", new Todo(todo.id,title, description, date));
    }
    else{
      console.log("newmode", new Todo(new Date().getTime(),title, description, date))
    }
    console.log(title,description,date);
  };

  const onDone = () => {
    console.log(todo);
  };
  return (
    <Transition show={open}>
      <Dialog className="relative z-10" onClose={setOpen}>
        <TransitionChild
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-center shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:justify-center">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-center">
                      <form
                        action=""
                        onSubmit={handleSubmit}
                        className="space-y-6"
                        method="POST"
                      >
                        <div>
                          <div>
                            <input
                              type="text"
                              name="inputTitle"
                              placeholder="Title"
                              defaultValue={todo?.title}
                              className="block w-full rounded-md border-0 pl-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                            />
                          </div>
                          <div>
                            <input
                              type="text"
                              name="inputDescription"
                              placeholder="Description"
                              defaultValue={todo?.description}
                              className="block w-full rounded-md border-0 pl-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                            />
                          </div>
                          <div>
                            <input
                              type="date"
                              name="inputTime"
                              placeholder="Time"
                              defaultValue={todo?.date}
                              className="block w-full rounded-md border-0 pl-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:justify-center sm:px-6">
                          <button
                            type="submit"
                            className="inline-flex w-full justify-center rounded-md bg-orange-600 px-3 py-2 mr-4 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 sm:ml-3 sm:w-auto"
                          >
                            Done
                          </button>
                          <button
                            type="button"
                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                            onClick={() => setOpen(false)}
                            data-autofocus
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
