import { FOOTER, FAVOURIT  } from '../actions';

/**
 * User Reducer
 * @param  {Object} state
 * @param  {Object} action
 */
const user = (state = 
  {
    country: "",
    favourit:[]
  }
  
  , action) => {
  switch (action.type) {
    
    
      case FOOTER:
          
          return {
            ...state,
            country: action.data,
          };
      case FAVOURIT:
        console.log("state.favourit====>", state.favourit);
        if(state.favourit.length == 0 ){
          return {
            ...state,
            favourit: [action.data]
          };
        }
        else{

          return {
            ...state,
            favourit: state.favourit.concat(action.data)
          };
        }
          

    default:
      return state;
  }
};
export default user;
