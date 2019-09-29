import newsService from '../../shared/services/newsService'

const NEWS = 'NEWS';
const UPDATE_FILTERS_PAGE = 'UPDATE_FILTERS_PAGE';
const UPDATE_FILTERS_NAME = 'UPDATE_FILTERS_NAME';
const RESET_FILTERS = 'RESET_FILTERS';

const state = {
    filters: {
        "page": 1,
        "page-size": 10,
        "q": null
    },
    news: []
}

const getters = {
    news: state => state.news
}

const mutations = {
    NEWS(state, news) {
        state.news = news;
    },
    RESET_FILTERS(state) {
        state.filters = {
            "page": 1,
            "page-size": 10,
            "q": null
        }
    },
    UPDATE_FILTERS_PAGE(state, page) {
        state.filters.page = page;
    },
    UPDATE_FILTERS_NAME(state, name) {
        state.filters.q = name;
    },
}

// actions
const actions = {
    updatePage({ commit }, page) {
        commit(UPDATE_FILTERS_PAGE, page)
    },
    updateName({ commit }, name) {
        commit(UPDATE_FILTERS_NAME, name)
    },
    resetFilters({ commit }) {
        commit(RESET_FILTERS)
    },
    getNews({ commit }, params) {
        newsService.getNews(
            params,
            (response) => {
                commit(NEWS, response.response.results)
            })
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}