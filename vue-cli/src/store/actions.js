
export const actionA = ({ commit }) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            commit('SET_TEST')
            resolve()
        }, 1000)
    })
}

export const actionB = ({ dispatch, commit }) => {
    return dispatch('actionA').then(() => {
        commit('SET_TEST')
    })
}