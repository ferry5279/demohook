import _ from 'loadsh';
const initialState = {
    data: [],
}
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'DEFAULT_DATA':
            state.datas = payload.result.list;
            return {...state, data: _.cloneDeep(state.data) }; //数据持久化
            // case 'SEAR_DATA':
            //     state.datas = payload.users;
            //     return {...state, datas: _.cloneDeep(state.datas) };
            // case 'ADD_DATA':
            //     return {...state, datas: _.cloneDeep(state.datas) };
            // case 'SAMPLE_DATA':
            //     return {...state, pagesdata: _.cloneDeep(payload.result.list), count: payload.result.count };
        default:
            return state
    }
}