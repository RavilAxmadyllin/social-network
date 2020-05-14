import * as axios from 'axios'

const instance = axios.create({
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    header: {
        "API-KEY":"453e07d4-a504-48b8-9b48-db15298a3681"
    }
})

export const userAPI = {
    getUsers(currentPage, pageSize) {
        return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    follow(id) {
        return instance.post(`follow/${id}`)
    },
    unfollow(id) {
        return instance.delete(`/follow/${id}`)

    }
}
