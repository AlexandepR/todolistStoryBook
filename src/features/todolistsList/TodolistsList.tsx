import React, {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import {
    addTodolistTC,
    changeTodolistFilterAC, changeTodolistTitleTC,
    fetchTodolistsTC,
    FilterValuesType,
    removeTodolistTC,
    TodolistDomainType
} from "./Todolist/todolists-reducer";
import {addTaskTC, removeTaskTC, TasksStateType, updateTaskTC} from "./Todolist/tasks-reducer";
import {TaskStatuses} from "../../api/todolist-api";
import {Grid, Paper} from "@material-ui/core";
import {AddItemForm} from "../../components/AdditemForm/AddItemForm";
import {Todolist} from "./Todolist/Todolist";

// export const TodolistsList: React.FC<TodolistListPropsType> = (props) => {

type PropsType ={
    demo?: boolean
}


export const TodolistsList: React.FC<PropsType> = ({demo = false}) => {

    const todolists = useSelector<AppRootStateType, Array<TodolistDomainType>>(state => state.todolists)
    const tasks = useSelector<AppRootStateType, TasksStateType>(state => state.tasks)
    const dispatch = useDispatch();

    useEffect(() => {
        if (demo) {
            return
        }
        dispatch(fetchTodolistsTC())
    }, [])

    const removeTask = useCallback(function (id: string, todolistId: string) {
        const thunk = removeTaskTC(id, todolistId)
        dispatch(thunk);
    }, []);
    const addTask = useCallback(function (title: string, todolistId: string) {
        const thunk = addTaskTC(title, todolistId);
        dispatch(thunk);
    }, []);

    const changeStatus = useCallback(function (id: string, status: TaskStatuses, todolistId: string) {
        const thunk = updateTaskTC(id, {status}, todolistId);
        dispatch(thunk);
    }, []);

    const changeTaskTitle = useCallback(function (id: string, newTitle: string, todolistId: string) {
        const thunk = updateTaskTC(id, {title: newTitle}, todolistId);
        dispatch(thunk);
    }, []);

    const changeFilter = useCallback(function (value: FilterValuesType, todolistId: string) {
        const action = changeTodolistFilterAC(todolistId, value);
        dispatch(action);
    }, []);

    const removeTodolist = useCallback(function (id: string) {
        const thunk = removeTodolistTC(id);
        dispatch(thunk);
    }, []);

    const changeTodolistTitle = useCallback(function (id: string, title: string) {
        const thunk = changeTodolistTitleTC(id, title);
        dispatch(thunk);
    }, [])

    const addTodolist = useCallback((title: string) => {
        const thunk = addTodolistTC(title)
        dispatch(thunk)
    }, [dispatch]);


    return (
        <>
            <Grid container style={{padding: "20px"}}>
                <AddItemForm addItem={addTodolist}/>
            </Grid>
            <Grid container spacing={3}>
                {
                    todolists.map(tl => {
                        let allTodolistTasks = tasks[tl.id];

                        return <Grid item key={tl.id}>
                            <Paper style={{padding: "10px"}}>
                                <Todolist
                                    todolist={tl}
                                    tasks={allTodolistTasks}
                                    removeTask={removeTask}
                                    changeFilter={changeFilter}
                                    addTask={addTask}
                                    changeTaskStatus={changeStatus}
                                    removeTodolist={removeTodolist}
                                    changeTaskTitle={changeTaskTitle}
                                    changeTodolistTitle={changeTodolistTitle}
                                    demo={demo}
                                />
                            </Paper>
                        </Grid>
                    })
                }
            </Grid>
            {/*{*/}
            {/*    todolists.map(tl => {*/}
            {/*        let allTodolistTasks = tasks[tl.id];*/}

            {/*        return (*/}
            {/*            <Grid item key={tl.id}>*/}
            {/*                <Paper style={{padding: "10px"}}>*/}
            {/*                    <Todolist*/}
            {/*                        id={tl.id}*/}
            {/*                        title={tl.title}*/}
            {/*                        tasks={allTodolistTasks}*/}
            {/*                        removeTask={removeTask}*/}
            {/*                        changeFilter={changeFilter}*/}
            {/*                        addTask={addTask}*/}
            {/*                        changeTaskStatus={changeStatus}*/}
            {/*                        filter={tl.filter}*/}
            {/*                        removeTodolist={removeTodolist}*/}
            {/*                        changeTaskTitle={changeTaskTitle}*/}
            {/*                        changeTodolistTitle={changeTodolistTitle}*/}
            {/*                    />*/}
            {/*                </Paper>*/}
            {/*            </Grid>)*/}
            {/*    })*/}
            {/*}*/}
        </>)
}