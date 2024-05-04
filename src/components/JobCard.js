import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const JobCard = ({ job }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5">{job.companyName}</Typography>
        <Typography color="textSecondary">{job.jobRole}</Typography>
        <Typography variant="body2">Location: {job.location}</Typography>
        {/* <Typography variant="body2">
          Tech Stack: {job.techStack.join(", ")}
        </Typography> */}
        <Typography variant="body2">Role: {job.jobDetailsFromCompany}</Typography>
        <Typography variant="body2">Max Experience: {job.maxExp}</Typography>
      </CardContent>
    </Card>
  );
};

export default JobCard;
