import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {todolistsAPI} from "../api/todolist-api";

export default {
    title: 'API'
}
const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": 'de5ff970-0eb1-4623-af3f-da464b72caae'
    }
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsAPI.getTodolist()
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', {title: 'Alex todolist'}, settings)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = '1d2603ad-c7f2-4e33-898f-1227ea8e2909'
    useEffect(() => {
        axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, settings)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        axios.put('https://social-network.samuraijs.com/api/1.1/todo-lists/5616e60a-17a7-414a-930b-c975103e97c4', {title: 'AAAAAAAAAAA'}, settings)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
