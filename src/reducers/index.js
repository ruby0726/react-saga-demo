import { combineReducers } from 'redux';
import us from './user';
import counter from './counter';

export default combineReducers({
    us,
  counter
})
