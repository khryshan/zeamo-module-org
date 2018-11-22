const LOAD = 'zeamo-organization-module/Jr/location/LOAD';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD:
      console.warn("Selected node", action.data);
      return action.data;
    default:
      return state;
  }
};

export const load = data => ({ type: LOAD, data });

export default reducer;
