import { getType } from 'typesafe-actions'
import { hnActions } from './actions'
import { combineReducers } from 'redux';
import { GOT_FRONT_PAGE } from './types';

export type HnState = {
    readonly isFetching: boolean;
    readonly data: any;
}

export type Hits = {
    title: string;
    created_at_i: number
}

export type JSONResponse = {
    hits: Hits[]
}

export const hnReducer = combineReducers<HnState>({
    isFetching: (state = false, action) => {
        switch (action.type) {
            case getType(hnActions.fetchFrontPage):
                return true;
            default:
                return false
        }

    },
    data: (state = {}, action) => {
        switch (action.type) {
            case GOT_FRONT_PAGE: {
                return action.payload;
            }
            default: {
                return state
            }
        }
    }
})