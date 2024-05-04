import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchJobs } from '../store/jobActions';
import JobCard from './JobCard';
import { Grid } from '@mui/material';

const JobList = () => {
    const dispatch = useDispatch();
    const { jobs, loading, error } = useSelector(state => state.jobs);

    useEffect(() => {
        dispatch(fetchJobs());
    }, [dispatch]);
    console.log(jobs.jdList,"data")
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <Grid container spacing={2}>
            {jobs.jdList?.map(job => (
                <Grid item xs={12} sm={6} md={4} key={job.id}>
                    <JobCard job={job} />
                </Grid>
            ))}
        </Grid>
    );
};

export default JobList;