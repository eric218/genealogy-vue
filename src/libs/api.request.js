import HttpRequest from '@/libs/axios'
const baseUrl = 'http://192.168.2.179:8090/'
const axios = new HttpRequest(baseUrl)
export default axios