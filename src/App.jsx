import { createContext, useState } from "react";
import MainContainer from "./component/MainContianer";
import moment from "moment";


export const listContext = createContext(null);

export class Todo {
  constructor(id, title, description, dateDone) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dateDone = dateDone;
    this.dateCreated = new Date();
  }
}
const todoList = [
  new Todo("1", "buy", "milk2222", moment().format("LTS")),
  new Todo("2", "go", "milk2222", moment().format("LTS")),
];

function App() {
  const [listtodo, setlisttodo] = useState(todoList);
  return (
    <>
      <listContext.Provider value={{ listtodo: listtodo ,setlisttodo}}>
        <MainContainer />
      </listContext.Provider>
    </>
  );
}

export default App;
