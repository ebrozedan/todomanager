import store from "../../store";
import { todoSuccess } from "./reducers";
import axios from "axios";
export async function getTodos(){
    const response= await axios.get(
        "https://jsonplaceholder.typicode.com/todos");
            if(response.status ===200){
                store.dispatch(todoSuccess(response.data));
            }
            else{
               console.error("internal servererror")
            }
};
export async function createTodos(todo){
    const response= await axios.post(
        "https://jsonplaceholder.typicode.com/todos", todo);
            if(response.status ===201){
              const todos=[response.data,...store.getState().todoList];  
                store.dispatch(todoSuccess(todos));
            }
            else{
               console.error("internal servererror")
            }
};
