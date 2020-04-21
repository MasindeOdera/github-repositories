import { FETCH_REPOS, FETCH_QUERY } from './types';

// export const fetchRepos = query => dispatch => {
//     let url = (`https://newsapi.org/v2/everything?q=${search}from=${currentDate}sortBy=popularity&apiKey=9b942d5f77b34e51aac3d8975148928a`);
//     const req = new Request(url);
//     fetch(req)
//         .then(res => res.json())
//         .then(data => dispatch({
//             type: FETCH_REPOS,
//             payload: data.items,
//         })).then(articles => console.log(articles));
// };

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
