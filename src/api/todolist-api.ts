import axios from 'axios'

const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": 'de5ff970-0eb1-4623-af3f-da464b72caae'
    }
}

export const todolistsAPI = {
    getTodolist(){
        const promise = axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)
        return promise;
    }
}