import axios from 'axios'

const baseUrl = "https://reqres.in/api"

export const reqresAPI = (config) => axios.request({
    baseURL: `${baseUrl}/${config.path}`,
    method: config.method,
    data: config.data,
    timeout: 1000,
})