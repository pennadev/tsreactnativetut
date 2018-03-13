import { Epic, combineEpics } from "redux-observable";
import { RootAction } from '..';
import { RootState } from '../store';
import '../../rxjs-imports'
import { hnActions } from './actions';
import { isActionOf } from 'typesafe-actions';
import { Observable } from 'rxjs/Observable';
import { AsyncStorage } from 'react-native'

const fetchHnApiEpic$: Epic<RootAction, RootState> = (action$, store) => action$
    .filter(isActionOf(hnActions.fetchFrontPage))
    .concatMap(action => Observable.fromPromise(getHnFrontPage()))
    .concatMap((response) => Observable.of(hnActions.gotFrontPage(response)))

const fetchHnApiFromStorage$: Epic<RootAction, RootState> = (action$, store) => action$
    .filter(isActionOf(hnActions.fetchFrontPage))
    .concatMap((action: RootAction) => Observable.fromPromise(getFromAsyncStorage()))
    .filter(v => (v !== null))
    .concatMap(v => Observable.of(hnActions.gotFrontPage(v)))

const fetchCommentsEpic$: Epic<RootAction, RootState> = (action$, store) => action$
    .filter(isActionOf(hnActions.fetchCommentsForStory))
    .concatMap((action: RootAction) => Observable.fromPromise(getCommentsForStory(action.payload)))
    .do((response) => console.log(response))
    .concatMap((response: JSON) => Observable.of(hnActions.gotCommentsForStory(response)) )


function saveToAsyncStorage(obj: JSON) {
    return AsyncStorage.setItem("@hnApi", JSON.stringify(obj))
}

function getFromAsyncStorage(): Promise<JSON> {
    return AsyncStorage.getItem("@hnApi")
        .then(item => JSON.parse(item))
}

function getHnFrontPage(): Promise<JSON> {
    return fetch("https://hn.algolia.com/api/v1/search?tags=front_page")
        .then(response => response.json())
        .catch((error) => console.log(error))
}


function getCommentsForStory(storyId: string): Promise<JSON> {
    return fetch("http://hn.algolia.com/api/v1/search?tags=comment,story_" + storyId)
        .then(response => response.json())
}

export const hnEpics = combineEpics(fetchHnApiEpic$, fetchCommentsEpic$)