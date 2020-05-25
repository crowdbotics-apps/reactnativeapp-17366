import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn251663Reducer from '../features/SignIn251663/redux/reducers'
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn251663: SignIn251663Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});