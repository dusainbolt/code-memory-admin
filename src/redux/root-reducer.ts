import { combineReducers } from 'redux';
import user from './user';

const rootReducer = combineReducers({
    user: user,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
