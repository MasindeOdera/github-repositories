import { FETCH_REPOS, FETCH_QUERY, FETCH_DETAIL, FIND_USER, LOADING } from '../actions/types';

const initialState = {
    query: '',
    user:'',
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
                // user: action.payload
            };
        case FIND_USER:
            return {
                ...state,
                user: action.payload,
                loading: false,
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