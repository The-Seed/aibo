import * as types from './mutation-types'

export default {
    [types.SET_TEST](state,test) {
        state.test = 'abcd';
    }
}