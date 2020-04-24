import { FETCH_REPOS, FETCH_QUERY, STORE_DETAIL, FIND_USER, LOADING } from './types';

export const fetchRepos = query => dispatch => {
    fetch(`https://api.github.com/search/repositories?q=${query}+in:repositories`)
    .then(res => res.json())
    .then(data => dispatch({
        type: FETCH_REPOS,
        payload: data.items,
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
