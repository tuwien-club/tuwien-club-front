import {combineReducers} from '@reduxjs/toolkit'
import houseReducer from './house'
import lastVisitedReducer from './last-visited'

const rootReducer = combineReducers({houseReducer, lastVisitedReducer})

export default rootReducer
