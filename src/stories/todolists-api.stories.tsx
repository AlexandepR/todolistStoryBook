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

// export const deleteTodolist = () => {
//     const [state, setState] = useState<any>(null)
//     const todolistId = 'b57fd56e-8bc0-452c-b46b-fdaa704905be'
//     useEffect(() => {
//             todolistsAPI.deleteTodolist(todolistId)
//             .then((res) => {
//                 setState(res.data)
//             })
//     }, [])
//
//     return <div> {JSON.stringify(state)}</div>
// }

export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '045b4034-dc61-46bb-8d45-95f194053c70'
        todolistsAPI.updateTodolist(todolistId, 'Hi Alex')
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)

    useEffect(() => {
        const todolistId = '045b4034-dc61-46bb-8d45-95f194053c70';
        todolistsAPI.getTasks(todolistId)
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    const [taskId, setTaskId] = useState<string>('')
    const [todolistId, setTodolistId] = useState<string>('')

    const deleteTask = () => {
        const todolistId = ''
        const taskId = ''
        todolistsAPI.deleteTask(todolistId, taskId)
            .then((res) => {
                setState(res.data)
            })
    }
    return <div>{JSON.stringify(state)}
        <div>
            <input
                placeholder={'todolistId'}
                value={todolistId}
                onChange={(e) => {setTodolistId(e.currentTarget.value)}}
            />
            <input
                placeholder={'taskId'}
                value={taskId}
                onChange={(e) => {setTaskId(e.currentTarget.value)}}/>
            <button onClick={deleteTask}>delete task</button>
        </div>
    </div>
}