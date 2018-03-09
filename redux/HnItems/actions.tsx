import { createAction } from 'typesafe-actions'
import {
    FETCH_FRONT_PAGE,
    GOT_FRONT_PAGE
} from './types'

export const hnActions = {
    fetchFrontPage: createAction(FETCH_FRONT_PAGE),
    gotFrontPage: createAction(GOT_FRONT_PAGE, (json: JSON) => ({
        type: GOT_FRONT_PAGE,
        payload: json
    }))
}