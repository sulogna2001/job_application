import axios from "axios";

// Action to fetch jobs with API provided
export const fetchJobs = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_JOBS_START" });

    const url = "https://api.weekday.technology/adhoc/getSampleJdJSON";
    const data = JSON.stringify({
      limit: 10,
      offset: 0,
    });
    const config = {
      method: "post",
      url: url,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        dispatch({ type: "FETCH_JOBS_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_JOBS_ERROR", payload: error.toString() });
      });
  };
};

// Action to set filter
// export const setFilter = (name, value) => ({
//   type: "SET_FILTER",
//   payload: { name, value },
// });
