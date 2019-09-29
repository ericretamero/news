const CHANGE_PAGE = 'CHANGE_PAGE';

const state = {
    page: 0,
    totalVisible: 6
}

const getters = {
    page: state => state.page,
    totalVisible: state => state.totalVisible
}

const actions = {
    change({ commit }, page) {
        commit(CHANGE_PAGE, page)
    }
}

const mutations = {
    CHANGE_PAGE(state, page) {
        state.page = page;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}