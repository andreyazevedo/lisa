const initialState = {};

const movies = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_CONFIG':
      return Object.assign(state, action.payload.config);
    default:
      return state;
  }
};

export default movies;
