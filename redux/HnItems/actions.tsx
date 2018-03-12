import { createAction } from 'typesafe-actions'
import {
    FETCH_FRONT_PAGE,
    GOT_FRONT_PAGE,
    FETCH_COMMENTS_FOR_STORY,
    GOT_COMMENTS_FOR_STORY
} from './types'

export const hnActions = {
    fetchFrontPage: createAction(FETCH_FRONT_PAGE),
    gotFrontPage: createAction(GOT_FRONT_PAGE, (json: JSON) => ({
        type: GOT_FRONT_PAGE,
        payload: json
    })),
    fetchCommentsForStory: createAction(FETCH_COMMENTS_FOR_STORY, (storyId: string) => ({
        type: FETCH_COMMENTS_FOR_STORY,
        payload: storyId
    })),
    gotCommentsForStory: createAction(GOT_COMMENTS_FOR_STORY, (data: JSON) => ({
        type: GOT_COMMENTS_FOR_STORY,
        payload: data
    }))
}