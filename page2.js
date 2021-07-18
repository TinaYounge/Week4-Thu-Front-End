const page = ["1", "2", "3", "4"];
const companies = [];
function renderJobAnchorTags() {
  let result = window.location.origin;
  let result2 = window.location.pathname;
  const jobHTML = page.map(
    (el) =>
      `<a  class="page-link" href="${result}${result2}?companyId=xxx&page=${el}">${el}</a>`
  );
  document.getElementById("pageInJob").innerHTML = jobHTML;
  // document.getElementById("idJobs").innerHTML = idJobsMap.
}
renderJobAnchorTags();
