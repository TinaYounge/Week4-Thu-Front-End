let url = `http://localhost:5000/companies`;

async function getCompanies() {
  try {
    const response = await fetch(url);
    const json = await response.json();
    const { companies } = json;
    console.log("json form api", { json });
    const companiesHTML = companies.map(renderCompanies);
    document.getElementById("companiesCard").innerHTML = companiesHTML.join("");
  } catch (error) {
    console.log(error);
    companies = JSON.parse(localStorage.getItem("Some thing is not good"));
  }
}

function renderCompanies(company) {
  return `
  <div class="card-deck">
  <div class="card">
    <img src="..." class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">
        This is a wider card with supporting text below as a natural
        lead-in to additional content. This content is a little bit
        longer.
      </p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
  `;
}
getCompanies();
