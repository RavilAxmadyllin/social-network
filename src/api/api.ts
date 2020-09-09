import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'ef3df34b-f620-4141-98a4-941ac190a9df'
    }
})

export const userAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<DataPage>(`users?page=${currentPage}&count=${pageSize}&sortOrder=asc`)
            .then(response => response.data)
    },
    follow(id: number) {
        return instance.post<DataType<{}>>(`follow/${id}`).then(res => res.data)
    }
    ,
    unfollow(id: number) {
        return instance.delete<DataType<{}>>(`follow/${id}`).then(res => res.data)
    }
}


export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<ProfileType>(`/profile/${userId}`).then(res => res.data)
    },
    editProfile(profileDesc: ProfileType) {
        return instance.put<DataType<{}>>(`/profile`, profileDesc).then(res => res.data)
    },
    getStatus(userId: number) {
        return instance.get(`/profile/status/${userId}`).then(res => res.data)
    },
    updateStatus(status: string) {
        return instance.put<DataType<{}>>(`/profile/status`, {status}).then(res => res.data)
    },
    changePhotos(photo: File) {
        const formData = new FormData()
        formData.append('image', photo)
        return instance.put<DataType<{photos: PhotosType}>>('/profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => res.data)
    }

}
export const authMe = {
    me() {
        return instance.get<DataType<ResponseMeType>>('auth/me').then(res => res.data)

    },
    signIn(data: PropertySignType) {
        return instance.post<DataType<{ userdId: number }>>('auth/login', data)
            .then(resp => resp.data)
    },
    signOut() {
        return instance.delete<DataType<{}>>('auth/login')
    },
    captcha() {
        return instance.get<{ url: string }>('security/get-captcha-url').then(resp => resp.data)
    }
}

export const dialogsAPI = {
    getDialogs() {
        return instance.get<Array<DialogItemType>>('dialogs')
            .then(resp => resp.data)
    },
    startDialog(userId: string) {
        return instance.put<DataType<{}>>(`dialogs/${userId}`)
            .then(resp => resp.data)
    },
    getMessage(userId: string) {
        return instance.get<DataType<{items:Array<ReceivedMessageType>}>>(`dialogs/${userId}/messages`)
            .then(resp => resp.data)
    },
    sendMessage(userId: string, body: string) {
        return instance.post<DataType<{ message: SendMessageType }>>(`dialogs/${userId}/messages`, {body})
            .then(res => res.data)
    },
    getNewMessageCount() {
        return instance.get<number>(`dialogs/messages/new/count`)
            .then(resp => resp.data)
    }

}


//type
export type ProfileType = {
    aboutMe: string
    contacts: {
        github: string | null
        vk: string | null
        facebook: string | null
        instagram: string | null
        twitter: string | null
        website: string | null
        youtube: string | null
        mainLink: string | null
    }
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: PhotosType
    userId: number
}

type DataPage = {
    items: Array<UserType>
    totalCount: number
    error: string
}
export type PropertySignType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: null | string
}
export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}
export type PhotosType = {
    small: string | null
    large: string | null
}
type DataType<D> = {
    data: D
    messages: Array<string>
    resultCode: number
}
export type DialogItemType = {
    hasNewMessages: boolean
    id: string
    lastDialogActivityDate: string
    lastUserActivityDate: string
    newMessagesCount: number
    photos: PhotosType
    userName: string
}
export type ReceivedMessageType = {
    addedAt: string
    body: string
    id: string
    recipientId: number
    senderId: number
    senderName: string
    translatedBody: null
    viewed: boolean

}
type SendMessageType = {
    addedAt: string
    body: string
    deletedByRecipient: boolean
    deletedBySender: boolean
    distributionId: null
    id: string
    isSpam: boolean
    recipientId: number
    recipientName: string
    senderId: number
    senderName: string
    translatedBody: null
    viewed: boolean
}
type ResponseMeType = {
    email: string
    id: number
    login: string
}




























