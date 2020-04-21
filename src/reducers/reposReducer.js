import { FETCH_REPOS, FETCH_QUERY } from '../actions/types';

const initialState = {
    query: '',
    items: [],
    item: {},
    article: [],
    loading: true,
    id: [],
}

export default function (state = initialState, action) {
    switch(action.type) {
        case FETCH_REPOS:
            return {
                ...state,
                items: action.payload,
                query: state.query,
                loading: false,
                id: state.id
            };
        case FETCH_QUERY:
            return {
                ...state,
                query: action.payload
            };
        default:
            return state;
    }
}