import { combineReducers } from 'redux';

import cmsReducer from './cmsReducer'

export default combineReducers({
    cms: cmsReducer
});