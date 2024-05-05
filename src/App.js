import React, { useState } from "react";
import FilterBar from "./components/FilterBar";
import JobsList from "./components/JobsList";
import { Container } from "@mui/material";

function App() {
  const [filterData, setFilterData] = useState("");

  // Function to update the filter text
  const handleFilterChange = (newFilter) => {
    setFilterData(newFilter);
  };
  return (
    <Container>
      <FilterBar onFilterChange={handleFilterChange} />
      <JobsList filterData={filterData} />
    </Container>
  );
}

export default App;
