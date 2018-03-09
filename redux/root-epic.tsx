import { combineEpics } from 'redux-observable'
import { hnEpics } from './HnItems/epics';

export const rootEpic = combineEpics(
    hnEpics
)