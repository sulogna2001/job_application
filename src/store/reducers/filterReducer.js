const initialState = {
  options: {
    jdList:[]
  },
  loading: false,
  error: null,
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_FILTER_OPTIONS_START":
      return { ...state, loading: true, error: null };
    case "FETCH_FILTER_OPTIONS_SUCCESS":
      return { ...state, loading: false, options: action.payload, error: null };
    case "FETCH_FILTER_OPTIONS_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default filterReducer;
