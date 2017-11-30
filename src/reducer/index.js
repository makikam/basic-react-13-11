import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import dateRange from './dateRange'
import articlesFilter from './articlesFilter'

export default combineReducers({
    counter: counterReducer,
    articles,
    dateRange,
    articlesFilter
})