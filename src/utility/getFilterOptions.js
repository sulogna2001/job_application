export const getFilterOptions = (jobs) => {
  let role = new Set();
  let locations = new Set();
  let minExp = new Set();
  let minJdSalary = new Set();

  jobs.forEach((job) => {
    if (job.jobRole) role.add(job.jobRole);
    if (job.location) locations.add(job.location);
    if (job.minExp) minExp.add(job.minExp);
    if (job.minJdSalary) minJdSalary.add(job?.minJdSalary);
  });

  return {
    role: Array.from(role),
    locations: Array.from(locations),
    minExp: Array.from(minExp).sort((a, b) => a - b),
    minJdSalary:Array.from(minJdSalary).sort((a, b) => a - b),
  };
};
