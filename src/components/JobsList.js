import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchJobs } from "../store/actions/jobActions";
import JobCard from "./JobCard";
import { Grid } from "@mui/material";

const JobsList = ({ filterData }) => {
  const dispatch = useDispatch();
  const { jobs, loading, hasMore } = useSelector((state) => state.jobs);

  // Function to handle infinite scrolling
  const handleScroll = useCallback(() => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    // Fire the event a bit before reaching the bottom
    if (scrollTop + clientHeight >= scrollHeight - 20) {
      if (!loading && hasMore) {
        dispatch(fetchJobs(jobs.length));
      }
    }
  }, [dispatch, jobs.length, loading, hasMore]);

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Render loading message if initial load
  if (loading && jobs.length === 0) return <div>Loading...</div>;

  // Decide the jobs list to be displayed
  const displayedJobs =
    filterData && filterData.length > 0 ? filterData : jobs?.jdList;

  return (
    <Grid container spacing={2}>
      {displayedJobs?.map((job) => (
        <Grid item xs={12} sm={6} md={4} key={job.id}>
          <JobCard job={job} />
        </Grid>
      ))}
      {loading && <div>Loading more...</div>}
    </Grid>
  );
};

export default JobsList;
