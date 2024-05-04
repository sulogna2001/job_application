export const getFilterOptions = (jobs) => {
  let role = new Set();
  let locations = new Set();
  let techStacks = new Set();

  jobs.forEach((job) => {
    if (job.jobRole) role.add(job.jobRole);
    if (job.location) locations.add(job.location);
    if (job.techStack) job.techStack.forEach((stack) => techStacks.add(stack));
  });

  return {
    role: Array.from(role),
    locations: Array.from(locations),
    techStacks: Array.from(techStacks),
  };
};
