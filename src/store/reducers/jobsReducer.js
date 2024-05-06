const initialState = {
  jobs: [],
  loading: false,
  error: null,
  hasMore:true
};

function jobsReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_JOBS_START":
      return { ...state, loading: true };
    case "FETCH_JOBS_SUCCESS":
      console.log(action.payload.hasMore, "hasmore received");
      return {
        ...state,
        jobs: action.payload.jobs,
        loading: false,
        hasMore: action.payload.hasMore,
      };
    case "FETCH_JOBS_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
        hasMore: false,
      };
    default:
      return state;
  }
}

export default jobsReducer;
