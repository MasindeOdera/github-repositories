import { FETCH_REPOS, FETCH_QUERY, FETCH_DETAIL, LOADING } from './types';

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

export const fetchDetail = detail => dispatch => {
    dispatch({
        type: FETCH_DETAIL,
        payload: detail
    })
};

export const setLoading = () => {
    return {
        type: LOADING
    }
};
