import { RouterAction, LocationChangeAction } from 'react-router-redux'
import { $call } from 'utility-types'

const returnsOfActions = [
    //register actions types
    //gen aici ar fi toate actiunle din app
].map($call)

type AppAction = typeof returnsOfActions[number]
type ReactRouterAction = RouterAction | LocationChangeAction

export type RootAction =
    | AppAction
    | ReactRouterAction