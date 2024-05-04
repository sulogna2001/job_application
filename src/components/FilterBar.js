import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../store/actions/jobActions";
import { fetchJobs } from "../store/actions/jobActions";

import { getFilterOptions } from "../utility/getFilterOptions";
import {
  Grid,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
const FilterBar = () => {
  const dispatch = useDispatch();
  const { jobs, loading, error } = useSelector((state) => state.jobs);
  const [filterOptions, setFilterOptions] = useState({
    role: [],
    locations: [],
    techStacks: [],
  });

  const [filteredJobs, setFilteredJobs] = useState([]);
  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  useEffect(() => {
    if (jobs?.jdList?.length) {
      setFilterOptions(getFilterOptions(jobs.jdList));
      setFilteredJobs(jobs.jdList);
    }
  }, [jobs]);
  {
    console.log(jobs.jdList);
  }
  const handleFilterChange = (name, value) => {
    let filtered;
    switch (name) {
      case "role":
        filtered = jobs.jdList.filter((job) => job.jobRole === value);
        break;
      case "locations":
        filtered = jobs.jdList.filter((job) => job.location === value);
        break;
      case "techStacks":
        filtered = jobs.jdList.filter((job) => job.techStack.includes(value));
        break;
      default:
        filtered = jobs.jdList;
        break;
    }

    setFilteredJobs(filtered);
    console.log(filtered, "jobs filtered by " + name);
  };

  const Dropdown = ({ label, items }) => (
    <Grid item xs={12} sm={6} md>
      <FormControl fullWidth size="small">
        <InputLabel>{label}</InputLabel>
        <Select
          label={label}
          onChange={(e) =>
            handleFilterChange(label.toLowerCase(), e.target.value)
          }
          defaultValue=""
        >
          {items?.map((item, index) => (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      sx={{ padding: "16px", margin: "auto", maxWidth: 1280 }}
    >
      <Dropdown label="Role" items={filterOptions.role} />
      <Dropdown label="Location" items={filterOptions.locations} />
      <Dropdown label="Tech Stack" items={filterOptions.techStacks} />
      <Grid item xs={12} sm={6} md>
        <TextField
          fullWidth
          label="Search Jobs"
          variant="outlined"
          size="small"
        />
      </Grid>
    </Grid>
  );
};

export default FilterBar;
