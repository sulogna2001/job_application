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
const FilterBar = ({ onFilterChange }) => {
  const dispatch = useDispatch();
  const { jobs } = useSelector((state) => state.jobs);
  const [companyName, setCompanyName] = useState("");
  const [filterOptions, setFilterOptions] = useState({
    role: [],
    locations: [],
    minExp: [],
    minJdSalary: [],
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
  const filterJobs = () => {
    let filtered = jobs.jdList;
    if (companyName) {
      filtered = filtered.filter((job) =>
        job.companyName.toLowerCase().includes(companyName.toLowerCase())
      );
    }
    onFilterChange(filtered);
  };
  const handleFilterChange = (name, value) => {
    let filtered;
    switch (name) {
      case "role":
        filtered = jobs.jdList.filter((job) => job.jobRole === value);
        break;
      case "location":
        filtered = jobs.jdList.filter((job) => job.location === value);
        break;
      case "jobForm":
        if (value === "remote") {
          // Filter jobs that are explicitly marked as remote
          filtered = jobs.jdList.filter(
            (job) => job.location.toLowerCase() === "remote"
          );
        } else {
          // Filter jobs that are not marked as remote
          filtered = jobs.jdList.filter(
            (job) => job.location.toLowerCase() !== "remote"
          );
        }
        break;
      case "minExp":
        filtered = jobs.jdList.filter((job) => job.minExp >= value);
        break;
      case "minJdSalary":
        filtered = jobs.jdList.filter((job) => job?.minJdSalary >= value);
        break;
      default:
        filtered = jobs.jdList;
        break;
    }
    onFilterChange(filtered);
    console.log(filtered, "jobs filtered by " + name);
  };
  const handleCompanyNameChange = (event) => {
    setCompanyName(event.target.value);
    filterJobs();
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
      <Dropdown label="Remote" items={["Remote", "In Office"]} />
      <Dropdown label="Min Exp" items={filterOptions.minExp} />
      <Dropdown label="Min Pay" items={filterOptions?.minJdSalary} />
      <Grid item xs={12} sm={6} md>
        <TextField
          fullWidth
          label="Search company name"
          variant="outlined"
          size="small"
          value={companyName}
          onChange={handleCompanyNameChange}
        />
      </Grid>
    </Grid>
  );
};

export default FilterBar;
