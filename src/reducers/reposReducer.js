import { FETCH_REPOS, FETCH_QUERY, STORE_DETAIL, FIND_USER, LOADING, UPDATE_TOTAL_COUNT, SET_CURRENT_PAGE } from '../actions/types';

const initialState = {
    query: '',
    user:[],
    items: [],
    loading: false,
    totalCount: 0,
    totalPages: 0,
    currentPage: 1,   
}

export default function (state = initialState, action) {
    switch(action.type) {
        case FETCH_REPOS:
            return {
                ...state,
                items: action.payload.items || [],
                query: state.query,
                loading: false,
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
                loading: true,
            };
        case UPDATE_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.payload,
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            };
        default:
            return state;
    }
}