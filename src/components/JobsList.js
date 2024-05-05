import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchJobs } from "../store/actions/jobActions";
import JobCard from "./JobCard";
import { Grid } from "@mui/material";

const JobsList = ({ filterData }) => {
  console.log(filterData, "milaa");
  const dispatch = useDispatch();
  const { jobs, loading } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;

  const displayedJobs =
    filterData && filterData.length > 0 ? filterData : jobs?.jdList;
  return (
    <Grid container spacing={2}>
      {displayedJobs?.map((job) => (
        <Grid item xs={12} sm={6} md={4} key={job.id}>
          <JobCard job={job} />
        </Grid>
      ))}
    </Grid>
  );
};

export default JobsList;
