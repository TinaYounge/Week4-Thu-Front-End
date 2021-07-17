const page = ["1", "2", "3", "4"];

function renderJobAnchorTags() {
  let result = window.location.origin;
  let result2 = window.location.pathname;

  const jobHTML = page.map(
    (el) => `<a href="${result}${result2}?id=${el}">View</a>`
  );
  document.getElementById("page").innerHTML = jobHTML;
  // document.getElementById("idJobs").innerHTML = idJobsMap.
}
renderJobAnchorTags();
