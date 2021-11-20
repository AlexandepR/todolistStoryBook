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
        todolistsAPI.createTodolist('AAAALLLLLLEEEEXXXX')
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = 'b57fd56e-8bc0-452c-b46b-fdaa704905be'
    useEffect(() => {
            todolistsAPI.deleteTodolist(todolistId)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '045b4034-dc61-46bb-8d45-95f194053c70'
            todolistsAPI.updateTodilist(todolistId, 'Hi Alex')
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}

export const GetTask = () => {
    const[state,setState] = useState<any>(null)

    useEffect( () => {
        const todolistId = '';
        todolistsAPI.getTasks(todolistId)
            .then ((res) => {
                setState(res.data)
            })
    })
}

