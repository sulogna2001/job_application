const initialState = {
  jobs: [],
  filters: {
    minExperience: null,
    companyName: "",
    location: "",
    remote: null, // true for remote, false for on-site, null for both
    techStack: [],
    role: "",
    minBasePay: null,
  },
  loading: false,
  error: null,
};

function jobsReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_JOBS_START":
      return { ...state, loading: true };
    case "FETCH_JOBS_SUCCESS":
      return { ...state, jobs: action.payload, loading: false };
    case "FETCH_JOBS_ERROR":
      return { ...state, loading: false, error: action.payload };
    case "SET_FILTER":
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.name]: action.payload.value,
        },
      };
    default:
      return state;
  }
}

export default jobsReducer;
