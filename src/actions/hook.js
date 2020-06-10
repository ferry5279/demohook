import {get, post } from '@/utils/request';
import api from '@/services/api'

export function defaultData(payload) {
    return {
        type: 'DEFAULT_DATA',
        payload: get(`/apa${api.listWithPage}`)
    }
}