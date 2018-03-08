import {createAction} from 'typesafe-actions'
import { FETCH_FRONT_PAGE } from './types'

const fetchFrontPage = createAction(FETCH_FRONT_PAGE)