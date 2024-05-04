import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../store/jobActions";
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

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFilter(name, value));
  };

  const handleSearch = () => {
    // Optionally, trigger a new fetch based on filters
    // dispatch(fetchJobs());
  };
  const options = {
    companies: ["Company A", "Company B", "Company C"],
    locations: ["Location A", "Location B", "Location C"],
    techStacks: ["React", "Angular", "Vue"],
    roles: ["Developer", "Designer", "Manager"],
    experienceLevels: ["Junior", "Mid", "Senior"],
    employmentTypes: ["Full-time", "Part-time", "Contract"],
  };

  const Dropdown = ({ label, items }) => (
    <Grid item xs={12} sm={6} md>
      <FormControl fullWidth size="small">
        <InputLabel>{label}</InputLabel>
        <Select defaultValue="" label={label}>
          {items.map((item, index) => (
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
      <Dropdown label="Company" items={options.companies} />
      <Dropdown label="Location" items={options.locations} />
      <Dropdown label="Tech Stack" items={options.techStacks} />
      <Dropdown label="Role" items={options.roles} />
      <Dropdown label="Experience" items={options.experienceLevels} />
      <Dropdown label="Type" items={options.employmentTypes} />
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
