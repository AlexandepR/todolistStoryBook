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
    const [todolistId, setTodolistId] = useState<string>('')
    // const todolistId = 'afa4080e-0c14-4291-b6ad-22180abf7bf1'
    // useEffect(() => {
    const deleteTodolist = ()=> {
        todolistsAPI.deleteTodolist(todolistId)
            .then((res) => {
                setState(res.data)
            })
        // }, [])
    }
    return <div> {JSON.stringify(state)}
            <div>
                <input
                placeholder={'todolistId'}
                value={todolistId}
                onChange={(e) => {setTodolistId(e.currentTarget.value)}}
                />
                <button onClick={deleteTodolist}>DelTodolist</button>
            </div>
    </div>
}
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
    const [todolistId, setTodolistId] = useState<string>('')

    const getTasks = () =>{
        todolistsAPI.getTasks(todolistId)
            .then((res) => {
                setState(res.data)
            })
    }
    return <div>{JSON.stringify(state)}
        <input
            placeholder={'todolistId'}
            value={todolistId}
            onChange={(e) => {setTodolistId(e.currentTarget.value)}}
        />
        <button onClick={getTasks}>get task</button>
    </div>
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

export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    const [taskTitle, setTaskTitle] = useState<string>('')
    const [todolistId, setTodolistId] = useState<string>('')

    const createTask = () => {
        todolistsAPI.createTask(todolistId, taskTitle)
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
                placeholder={'taskTitle'}
                value={taskTitle}
                onChange={(e) => {setTaskTitle(e.currentTarget.value)}}/>
            <button onClick={createTask}>create task</button>
        </div>
    </div>
}

export const UpdateTask = () => {
    const [state, setState] = useState<any>(null)
    const [title, setTitle] = useState<string>('title 1')
    const [description, setDescription] = useState<string>(' description 1')
    const [status, setStatus] = useState<number>(0)
    const [priority, setPriority] = useState<number>(0)
    const [startDate, setStartDate] = useState<string>('')
    const [deadline, setDeadline] = useState<string>('')
    const [todolistId, setTodolistId] = useState<string>('')
    const [taskId, setTaskId] = useState<string>('')

    const createTask = () => {
        todolistsAPI.updateTask(todolistId, taskId, {
            deadline: '',
            description: description,
            priority: priority,
            startDate: '',
            status: status,
            title: title
        })
            .then((res) => {
                setState(res.data)
            })
    }
    return <div>{JSON.stringify(state)}
        <div>
            <input placeholder={'taskId'} value={taskId} onChange={(e) => {
                setTaskId(e.currentTarget.value)
            }}/>
            <input placeholder={'todolistId'} value={todolistId} onChange={(e) => {
                setTodolistId(e.currentTarget.value)
            }}/>
            <input placeholder={'task Title'} value={title} onChange={(e) => {
                setTitle(e.currentTarget.value)
            }}/>
            <input placeholder={'Description'} value={description} onChange={(e) => {
                setDescription(e.currentTarget.value)
            }}/>
            <input placeholder={'status'} value={status} onChange={(e) => {
                setStatus(+e.currentTarget.value)
            }}/>
            <input placeholder={'priority'} value={priority} onChange={(e) => {
                setPriority(+e.currentTarget.value)
            }}/>
            <button onClick={createTask}>update task</button>
        </div>
    </div>
}