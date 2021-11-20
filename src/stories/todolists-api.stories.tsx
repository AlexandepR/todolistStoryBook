import React, {useEffect, useState} from 'react'
import axios from 'axios'

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
        axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)
            .then( (res) => {
            setState(res.data)
        })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists',{ title: 'Alex todolist' }, settings)
            .then( (res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        axios.delete('https://social-network.samuraijs.com/api/1.1/todo-lists/1d2603ad-c7f2-4e33-898f-1227ea8e2909', settings)
            .then( (res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
