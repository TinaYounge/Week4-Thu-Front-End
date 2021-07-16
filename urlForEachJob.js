const idJobs = ["_uq65wzabx", "_386rlbuup", "_uc5gprb52", "_92n21ombp"];

function renderJobAnchorTags() {
  let result = window.location.origin;
  let result2 = window.location.pathname;

  const jobHTML = idJobs.map(
    (el) => `<a href="${result}${result2}?id=${el}">View</a>`
  );
  document.getElementById("idJob").innerHTML = jobHTML;
  // document.getElementById("idJobs").innerHTML = idJobsMap.
}
renderJobAnchorTags();
