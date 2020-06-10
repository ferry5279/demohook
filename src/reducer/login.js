import _ from 'loadsh';
import { GET_LOGIN_DATA, GET_REG_DATA } from '@/constants/actionTypes'
import { message } from 'antd'
const initialState = {
    login_data: {},
    reg_data: {}
}
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_LOGIN_DATA:
            if (payload.code !== '200') {
                message.info(payload.message)
            }
            console.log(payload)
            return {...state, login_data: _.cloneDeep(payload.data) };
        case GET_REG_DATA:
            if (payload.code !== '200') {
                message.info(payload.message)
            }
            return {...state, reg_data: _.cloneDeep(state.reg_data) };
        default:
            return state
    }
}