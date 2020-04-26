import { FETCH_REPOS, FETCH_QUERY, STORE_DETAIL, FIND_USER, LOADING, UPDATE_TOTAL_COUNT } from '../actions/types';

const initialState = {
    query: '',
    user:[],
    items: [],
    loading: false,
    totalCount: '',
    totalPages: 0,
    currentPage: 0,   
}

export default function (state = initialState, action) {
    switch(action.type) {
        case FETCH_REPOS:
            return {
                ...state,
                items: action.payload.items || [],
                query: state.query,
                loading: false,
                // totalCount: state.totalCount,
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
                loading: true,
            };
        case UPDATE_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.payload,
            };
        default:
            return state;
    }
}