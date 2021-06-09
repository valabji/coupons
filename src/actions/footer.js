export const FOOTER = 'FOOTER';

/**
 * Create logout Action
 */
export const footer = ( country) => ({
  type: FOOTER,
  data:country
});

const set_footer = (country  ) => dispatch => {
   
  dispatch(footer(country));
}

export const storeCountry = ( country ) => dispatch => {
  console.log(country);
 return dispatch(set_footer( country));
};
