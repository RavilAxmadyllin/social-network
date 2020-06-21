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
    },
    getStatus(userId) {
        return instance.get(`/profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`/profile/status`, {status})
    }
}
export const authMe ={
   me(){
       return instance.get('auth/me')
   },
   signIn(email, password, rememberMe = false, captcha=''){
       return instance.post('auth/login',{email, password, rememberMe, captcha})
   },
    signOut(){
        return instance.delete('auth/login')
    },
    captcha() {
       return instance.get('security/get-captcha-url')
    }
}
