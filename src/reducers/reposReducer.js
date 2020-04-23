import { FETCH_REPOS, FETCH_QUERY, FETCH_DETAIL, LOADING } from '../actions/types';

const initialState = {
    query: '',
    items: [],
    item: {},
    detail: [],
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
        case FETCH_DETAIL:
            return {
                ...state,
                detail: action.payload
            };
        case LOADING:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}