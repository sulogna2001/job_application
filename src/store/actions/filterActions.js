import axios from "axios";

// Action to fetch jobs with API provided
export const fetchFilterOptions = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_FILTER_OPTIONS_START" });

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
        dispatch({ type: "FETCH_FILTER_OPTIONS_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_FILTER_OPTIONS_ERROR", payload: error.toString() });
      });
  };
};
