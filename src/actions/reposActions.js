import { FETCH_REPOS, FETCH_QUERY, STORE_DETAIL, FIND_USER, LOADING, UPDATE_TOTAL_COUNT, SET_CURRENT_PAGE } from './types';

export const fetchRepos = (currentPage, query) => dispatch => {
    fetch(`https://api.github.com/search/repositories?q=${query}+in:repositories?page=${currentPage}&per_page=100`)
    .then(res => res.json())
    .then(data => dispatch({
        type: FETCH_REPOS,   
        payload: data,     
    })).then(data => console.log(data));
};

export const fetchQuery = query => {
    return {
        type: FETCH_QUERY,
        payload: query
    }
};

export const storeDetail = () => dispatch => {
    dispatch({
        type: STORE_DETAIL,
    })
};

export const findUser = user => dispatch => {
    fetch(`https://api.github.com/search/users?q=${user}`)
    .then(res => res.json())
    .then(data => dispatch({
        type: FIND_USER,
        payload: data.items,
    })).then(data => console.log(data));
};

export const setLoading = () => {
    return {
        type: LOADING
    }
};

export const updateTotalCount = totalCount => {
    return {
        type: UPDATE_TOTAL_COUNT,
        payload: totalCount
    }
};

export const setCurrentPage = pageNumber => {
    return {
        type: SET_CURRENT_PAGE,
        payload: pageNumber
    }
};
