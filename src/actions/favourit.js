export const FAVOURIT = 'FAVOURIT';

/**
 * Create logout Action
 */
export const fff = ( item) => ({
  type: FAVOURIT,
  data:item
});

const setFavourit = (item  ) => dispatch => {
   
  dispatch(fff(item));
}

export const addFavourit = ( item ) => dispatch => {
  console.log(item);
  
 return dispatch(setFavourit( item));
};
