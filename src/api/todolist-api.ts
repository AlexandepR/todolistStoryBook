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

export type todolistType = {
    id: string
    title: string
    addedDate: string
    order: number
}
type _CreateTodolistResponseType = {
    resultCode: number
    messages: string[]
    data: {
        item: todolistType
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
type ResponseType<D> = {
    resultCode: number
    messages: string[],
    data: D
}

type GetTasksResponse = {
    error: string | null
    totalCount: number
    items: TaskType[]
}
export type TaskType = {
    description: string
    title: string
    completed: boolean
    status: number
    priority: number
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}

export const todolistsAPI = {
    getTodolist() {
        const promise = instance.get<todolistType[]>('todo-lists')
        return promise;
    },
    createTodolist(title: string) {
        const promise = instance.post<ResponseType<{item: todolistType}>>('todo-lists', {title: title})
        return promise;
    },
    deleteTodolist(id: string) {
        const promise = instance.delete<ResponseType<{}>>(`todo-lists/${id}`)
        return promise;
    },
    updateTodolist(id: string, title: string) {
       const promise = instance.put<ResponseType<{}>>(`todo-lists/${id}`, {title: title} )
        return promise;
    },
    getTasks(todolistId:string) {
        const promise = instance.get<GetTasksResponse>(`todo-lists/${todolistId}/tasks`)
        return promise;
    }
}
