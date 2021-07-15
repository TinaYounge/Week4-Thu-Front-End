let url = `http://localhost:5000/jobs`;

async function getJobs() {
  try {
    const response = await fetch(url);
    const json = await response.json();
    const jobs = json;
    console.log("jobs", jobs);
    const jobsHTML = [];

    for (const job of jobs) {
      jobsHTML.push(renderjobs(job));
    }
    document.getElementById("eachJob").innerHTML = jobsHTML.join("");
  } catch (error) {
    console.log(error);
    jobs = JSON.parse(localStorage.getItem("Some thing is not good"));
  }
}
function renderjobs(job) {
  return `
  <h3 class="pb-4 mb-4 font-italic border-bottom"></h3>
  <div class="blog-post">
       
    <h2>${job.title}</h2>
    <p>
    ${job.city}
    </p>
    <p type="date">
    ${job.postedDate}
    </p>
    <h3>Skills</h3>
    <p>
    ${job.skills}
    </p>
    <p>
      Experience : ${job.yrsXPExpected} years
    </p>
    <h3>Benefits</h3>
    <ul>
      <li>
      -Working remote : ${job.remote}
      </li>
      <li>Salary: ${job.salaryLow} - ${job.salaryHigh}</li>
     </ul>
  </div>
  <!-- /.blog-post -->

  <nav class="blog-pagination">
    <a class="btn btn-outline-primary" href="#">Apply</a>
    <a
      class="btn btn-outline-secondary disabled"
      href="#"
      tabindex="-1"
      aria-disabled="true"
      >Save</a
    >
  </nav>
  `;
}
getJobs();
