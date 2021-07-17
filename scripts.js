let url = `http://localhost:5000/companies`;

async function getCompanies() {
  try {
    const response = await fetch(url);
    const json = await response.json();
    const companies = json;
    console.log("companies", companies);
    const companiesHTML = [];
    for (const company of companies) {
      companiesHTML.push(renderCompanies(company));
    }
    document.getElementById("companiesCard").innerHTML = companiesHTML.join("");
  } catch (error) {
    console.log(error);
    companies = JSON.parse(localStorage.getItem("Some thing is not good"));
  }
}

function renderCompanies(company) {
  return `
  <div class="col-md-4" id= "">
  <div class="card mb-4 shadow-sm">
    <img width="100%" height="100%" src = ${company.logoCompany}>
    <div class="card-body">
      <p class="card-text">${company.name}</p>
      <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
          <button type="button" class="btn btn-sm btn-outline-secondary" ><a href  ="./jobsinCom.html?companyId=${company.id} ">View</a></button>
          <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
        </div>
        <small class="text-muted">9 mins</small>
      </div>
    </div>
  </div>
</div>
  `;
}
getCompanies();
