import { RouterAction, LocationChangeAction } from 'react-router-redux'
import { $call } from 'utility-types'
import { hnActions } from './HnItems/actions';

const returnsOfActions = [
    ...Object.values(hnActions)
].map($call);

type AppAction = typeof returnsOfActions[number]
type ReactRouterAction = RouterAction | LocationChangeAction

export type RootAction =
 | AppAction
 | ReactRouterAction