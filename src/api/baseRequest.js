import axios from 'axios'

const request = axios.create({
    baseURL: "/api/v1"
})

request.interceptors.response.use(
    res => {
        if (res.data) {
            res.data["_response"] = res;
        }
        return res.data
    },
    err => err
)

export default request
