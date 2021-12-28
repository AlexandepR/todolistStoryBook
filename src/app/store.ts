import { tasksReducer } from '../features/todolistsList/Todolist/tasks-reducer';
import { todolistsReducer } from '../features/todolistsList/Todolist/todolists-reducer';
import {applyMiddleware, combineReducers, createStore} from 'redux';
// import thunk from "redux-thunk";
import {appReducer} from "./app-reducer";
import thunkMiddleware from "redux-thunk";


const rootReducer = combineReducers({
    tasks: tasksReducer,
    todolists: todolistsReducer,
    app: appReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store;
