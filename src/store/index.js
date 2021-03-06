// 创建store实例,applyMiddleware是中间件使用的方法
import { createStore , compose , applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,  composeEnhancers(
    applyMiddleware(thunk)
));

export default store;