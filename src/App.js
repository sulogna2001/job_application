import React from "react";
import FilterBar from "./components/FilterBar";
import JobsList from "./components/JobsList";
import { Container } from "@mui/material";

function App() {
  return (
    <Container>
      <FilterBar />
      <JobsList />
    </Container>
  );
}

export default App;
