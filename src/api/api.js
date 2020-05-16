import axios from 'axios'

const instance = axios.create({
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY":"ef3df34b-f620-4141-98a4-941ac190a9df"
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
        return instance.delete(`follow/${id}`)
    }
}

export const profileAPI ={
    getProfile(userId) {
        return instance.get(`/profile/${userId}`)
    }
}
export const authMe ={
   me(){
       return instance.get('/auth/me')
   }
}
