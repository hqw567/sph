import axios from "axios";

import nprogress from "nprogress";
import 'nprogress/nprogress.css'
const requests = axios.create({
    //配置对象
    baseURL: '/api', //默认请求路径
    timeout: 5000,
})

//请求拦截器
requests.interceptors.request.use((config) => {
    nprogress.start()
    return config
})
//响应拦截器
requests.interceptors.response.use((res) => {
    nprogress.done()
    return res.data
}), () => {
    return Promise.reject(new Error('failed'))
}
export default requests;