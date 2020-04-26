import { FETCH_REPOS, FETCH_QUERY, STORE_DETAIL, FIND_USER, LOADING } from '../actions/types';

const initialState = {
    query: '',
    user:[],
    items: [],
    detail: [],
    loading: true,
    retrieved: false,
    totalCount: '',
    
}

export default function (state = initialState, action) {
    switch(action.type) {
        case FETCH_REPOS:
            return {
                ...state,
                items: action.payload.items || [],
                query: state.query,
                loading: false,
                retrieved: true,
                totalCount: action.payload.total_count,
            };
        case FETCH_QUERY:
            return {
                ...state,
                query: action.payload
            };
        case STORE_DETAIL:
            return {
                ...state,
                user: action.payload
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