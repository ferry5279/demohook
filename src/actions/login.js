import {get, post } from '@/utils/request';
import { GET_LOGIN_DATA, GET_REG_DATA } from '@/constants/actionTypes'
import api from '@/services/api'
const proxy = 'http://134.175.115.202'
export function getLogindata(options) {
    return {
        type: GET_LOGIN_DATA,
        payload: post(`${proxy}${api.logins}`, options)
    }
}
export function getRegdata(options) {
    return {
        type: GET_REG_DATA,
        payload: post(`${proxy}${api.regs}`, options)
    }
}