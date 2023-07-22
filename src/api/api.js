import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'c6a5ffb7-c324-47ae-b6ad-eba042f9a8a8'
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    getAuthMe() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    getProfileUserId(id) {
        return instance.get(`profile/` + id)
            .then(response => {
                return response.data
            })
    },
    deleteSubscribe(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    postSubscribe(id) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    }
};