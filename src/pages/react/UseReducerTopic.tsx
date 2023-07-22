import TopicHeader from "../../components/common/TopicHeader";
import { useReducer, useState } from "react";


interface Todo {
    id: number;
    name: string;
    complete: boolean;
}

let initialTodos: Todo[] = [
    {
        id: 1,
        name: "Todo 1",
        complete: false,
    },
    {
        id: 2,
        name: "Todo 2",
        complete: false,
    },
];

enum TodoActionType {
    ADD_TODO = 'add-todo',
    TOGGLE_TODO = 'toggle-todo'
}

interface TodoAction {
    type: TodoActionType;
    payload: Todo;
}

const UseReducerTopic = () => {
    const reducer = (todos: Todo[], action: TodoAction): Todo[] => {
        switch (action.type) {
            case TodoActionType.ADD_TODO:
                return [...todos, action.payload];
            case TodoActionType.TOGGLE_TODO:
                return todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        return { ...todo, complete: !todo.complete }
                    }
                    return todo;
                });
            default:
                return todos;
        }
    }

    const [todos, dispatch] = useReducer(reducer, initialTodos);
    const [inputVal, setInputVal] = useState("");

    const newTodo = (todo: string) => {
        return { id: Date.now(), name: todo, complete: false }
    }

    function handleSubmit(e: any) {
        e.preventDefault();
        dispatch({ type: TodoActionType.ADD_TODO, payload: newTodo(inputVal) });
        setInputVal("");
    }

    return (
        <div>
            <TopicHeader title={"useReducer"} ></TopicHeader>
            <div className="px-4 py-6"> The useReducer hook is used for state management in React. </div>
            <div className="px-4 py-6"> It is an similar to useState hook. While useState allow you to get and set the State. useReducer allows you to do more</div>
            <div className="px-4 py-6"> It used to handle more complex state. </div>
            <div className="px-4 py-6"> The useReducer hook takes in a reducer function and an initial state. </div>
            <div className="px-4 py-6">
                <input value={inputVal} onChange={e => setInputVal(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
            </div>
            <div className="px-4 py-6">
                <button className="rounded-full px-3 bg-blue-950 text-blue-50" onClick={handleSubmit}>Add Todo</button>
            </div>
            <div className="px-4 py-6">
                {todos.map(todo => {
                    return <Todo key={todo.id} todo={todo} dispatch={dispatch}></Todo>
                })}
            </div>
        </div>
    );
}

const Todo = ({ todo, dispatch }: any) => {

    const handleComplete = (todo: Todo) => {
        dispatch({ type: TodoActionType.TOGGLE_TODO, payload: todo });
    };

    return (
        <div>
            <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => handleComplete(todo)}
            />
            <span className={"px-4 py-6 " + (todo.complete ? "text-blue-500" : "text-zinc-950")}>
                {todo.name}
            </span>
        </div>
    )
}



export default UseReducerTopic;