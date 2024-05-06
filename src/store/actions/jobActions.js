import axios from "axios";

// Action to fetch jobs with API provided
export const fetchJobs = (offset=0) => {
  return (dispatch) => {
    dispatch({ type: "FETCH_JOBS_START" });

    const url = "https://api.weekday.technology/adhoc/getSampleJdJSON";
    const limit=10;
    const data = JSON.stringify({
      limit,
      offset,
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
        const jobs = response.data;
        const hasMore = jobs.length === limit; 
        console.log(jobs,"data")
        dispatch({
          type: "FETCH_JOBS_SUCCESS",
          payload: { jobs, hasMore },
        });
      })
      
      .catch((error) => {
        dispatch({ type: "FETCH_JOBS_ERROR", payload: error.toString() });
      });
  };
};

