import { RouterState, routerReducer, routerMiddleware } from 'react-router-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { RootAction } from '.';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './root-epic';
import { HnState, hnReducer } from './HnItems/reducers';
import createHistory from 'history/createMemoryHistory'

interface StoreEnhancerState { }


export interface RootState extends StoreEnhancerState {
    router: RouterState,
    hnState: HnState
}

export const history = createHistory()

export const rootReducer = combineReducers({
    router: routerReducer,
    hnState: hnReducer
})

function configureStore(initialState?: RootState) {
    const middlewares = [
        createEpicMiddleware(rootEpic),
        routerMiddleware(history),
    ];
    
    const enhancer = applyMiddleware(...middlewares)
    
    return createStore(
        rootReducer,
        initialState!,
        enhancer
    )
}

const store = configureStore();

export default store;