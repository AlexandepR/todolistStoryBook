import axios from 'axios'

const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": 'de5ff970-0eb1-4623-af3f-da464b72caae'
    }
}

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

export const todolistsAPI = {
    getTodolist() {
        const promise = axios.get<todolistType[]>('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)
        return promise;
    },
    createTodolist(title: string) {
        const promise = axios.post<ResponseType<{item: todolistType}>>('https://social-network.samuraijs.com/api/1.1/todo-lists', {title: title}, settings)
        return promise;
    },
    deleteTodolist(id: string) {
        const promise = axios.delete<ResponseType<{}>>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${id}`, settings)
        return promise;
    },
    updateTodilist(id: string, title: string) {
       const promise = axios.put<ResponseType<{}>>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${id}`, {title: title} , settings)
        return promise;
    },
    getTasks(todolistId:string) {
        const promise = axios.get(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}/tasks`, settings)
        return promise;
    }
}
