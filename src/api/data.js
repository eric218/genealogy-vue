import axios from '@/libs/api.request'

export const getNavData = e => {
    return axios.request({
        url: 'genogram/fanMenu/getMenuBySiteId',
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

export const getTableData = () => {
    return axios.request({
        url: 'get_table_data',
        method: 'get'
    })
}

export const getDragList = () => {
    return axios.request({
        url: 'get_drag_list',
        method: 'get'
    })
}

export const errorReq = () => {
    return axios.request({
        url: 'error_url',
        method: 'post'
    })
}