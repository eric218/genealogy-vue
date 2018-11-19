import axios from '@/libs/api.request'

export const getNavData = e => {
    return axios.request({
        url: 'genogram/fanMenu/getIndexMenuBySiteId',
        params: e,
        method: 'get'
    })
}

export const getHomeApi = url => {
    return axios.request({
        url: url,
        method: 'get'
    })
}