import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

const JobCard = ({ job }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <Card
      sx={{
        minHeight: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="body1">⏳ Posted 12 days ago</Typography>
        </Box>
        <Box display="flex" alignItems="center" mt={2}>
          <img
            src={job.logoUrl}
            alt={`${job.companyName} logo`}
            style={{ width: 80, marginRight: 16 }}
          />
          <Box>
            <Typography variant="h6">{job.companyName}</Typography>
            <Typography variant="h5">{job.position}</Typography>
            <Typography variant="subtitle1">{job.location}</Typography>
          </Box>
        </Box>
        <Typography variant="body2" mt={2}>
          Estimated Salary: ₹{job.minJdSalary} - ₹{job.maxJdSalary} LPA ✅
        </Typography>
        <Typography variant="body1" mt={2}>
          About Company:
        </Typography>
        <Typography variant="body2">
          {showMore
            ? job.jobDetailsFromCompany
            : `${job.jobDetailsFromCompany.substring(0, 100)}...`}
        </Typography>

        <Box mt={1}>
          <Button size="small" onClick={toggleShowMore}>
            {showMore ? "View Less" : "View More"}
          </Button>
        </Box>
        <Box mt={2} display="flex" justifyContent="center">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#55efc4",
              color: "#000",
              fontWeight: "500",
            }}
          >
            ⚡ Easy Apply
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default JobCard;
