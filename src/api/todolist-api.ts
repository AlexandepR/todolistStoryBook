import axios from 'axios'

const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": 'de5ff970-0eb1-4623-af3f-da464b72caae'
    }
}
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        "API-KEY": 'de5ff970-0eb1-4623-af3f-da464b72caae'
    }
    // ...settings
})

// api
export const todolistsAPI = {
    getTodolist() {
        const promise = instance.get<TodolistType[]>('todo-lists')
        return promise;
    },
    createTodolist(title: string) {
        const promise = instance.post<ResponseType<{ item: TodolistType }>>('todo-lists', {title: title})
        return promise;
    },
    deleteTodolist(id: string) {
        const promise = instance.delete<ResponseType>(`todo-lists/${id}`)
        return promise;
    },
    updateTodolist(id: string, title: string) {
        const promise = instance.put<ResponseType>(`todo-lists/${id}`, {title: title})
        return promise;
    },
    getTasks(todolistId: string) {
        return instance.get<GetTasksResponse>(`todo-lists/${todolistId}/tasks`)
    },
    deleteTask(todolistId: string, taskId: string) {
        const promise = instance.delete<ResponseType>(`todo-lists/${todolistId}/tasks/${taskId}`)
        return promise
    },
    createTask(todolistId: string, taskTitle: string) {
        return instance.post<ResponseType<{item: TaskType}>>(`todo-lists/${todolistId}/tasks`, {title: taskTitle})
    },
    updateTask(todolistId: string, taskId:string, model: UpdateTaskModelType){
        const promise = instance.put<ResponseType>(`todo-lists/${todolistId}/tasks/${taskId}`, model)
        return promise
    }
}

// types
export type TodolistType = {
    id: string
    title: string
    addedDate: string
    order: number
}
type _CreateTodolistResponseType = {
    resultCode: number
    messages: string[]
    data: {
        item: TodolistType
    }
}
type _DeleteTodolistResponseType = {
    resultCode: number
    messages: string[],
    data: {}
}
type _updateTodolistResponseType = {
    resultCode: number
    messages: string[],
    data: {}
}
type ResponseType<D = {}> = {
    resultCode: number
    messages: string[],
    data: D
}
type GetTasksResponse = {
    error: string | null
    totalCount: number
    items: TaskType[]
}
export enum TaskStatuses {
    New = 0,
    InProgress = 1,
    Completed = 2,
    Draft = 3
}
export enum TaskPriorities {
    Low = 0,
    Middle= 1,
    Hi= 2,
    Urgently = 3,
    Later = 4
}
export type TaskType = {
    description: string
    title: string
    status: TaskStatuses
    priority: TaskPriorities
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}
export type UpdateTaskModelType = {
    title: string
    description: string
    status: TaskStatuses
    priority: number
    startDate: string
    deadline: string
}