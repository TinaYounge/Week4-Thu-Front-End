const page = ["1", "2", "3", "4"];

function renderJobAnchorTags() {
  let result = window.location.origin;
  let result2 = window.location.pathname;
  const jobHTML = page.map(
    (el) =>
      `<a  class="page-link" href="${result}${result2}?page=${el}">${el}</a>`
  );
  document.getElementById("page").innerHTML = jobHTML;
  // document.getElementById("idJobs").innerHTML = idJobsMap.
}
renderJobAnchorTags();

// function renderJobAnchorTagsInJob() {
//   let result = window.location.origin;
//   let result2 = window.location.pathname;
//   const job2HTML = page.map(
//     (el) =>
//       `<a  class="page-link" href="${result}${result2}?page=${el}">${el}</a>`
//   );
//   document.getElementById("pageinJob").innerHTML = job2HTML;
//   // document.getElementById("idJobs").innerHTML = idJobsMap.
// }
// renderJobAnchorTagsInJob();
