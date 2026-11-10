const searchInput = document.getElementById("search");
const sortOrder = document.getElementById("sort-order");
const cityFilter = document.getElementById("city-filter");
const container = document.getElementById("users-container");

let allUsers = [];

async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
}

function renderUsers(users) {
  container.innerHTML = users
    .map(
      (user) => `
        <div class="user-card">
          <h2>${user.name}</h2>
          <p>📧 ${user.email}</p>
          <p>🏢 ${user.company.name}</p>
          <p>📍 ${user.address.city}</p>
        </div>
      `
    )
    .join("");
}

function updateCityOptions(users) {
  const cities = [...new Set(users.map((user) => user.address.city))].sort();

  cityFilter.innerHTML = `<option value="all">All cities</option>`;
  cities.forEach((city) => {
    const option = document.createElement("option");
    option.value = city;
    option.textContent = city;
    cityFilter.appendChild(option);
  });
}

function filterAndSortUsers() {
  const query = searchInput.value.trim().toLowerCase();
  const selectedCity = cityFilter.value;
  const order = sortOrder.value;

  let filtered = [...allUsers];

  if (query) {
    filtered = filtered.filter(
      (user) =>
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)
    );
  }

  if (selectedCity !== "all") {
    filtered = filtered.filter((user) => user.address.city === selectedCity);
  }

  filtered.sort((a, b) => {
    const comparison = a.name.localeCompare(b.name);
    return order === "asc" ? comparison : -comparison;
  });

  renderUsers(filtered);
}

async function init() {
  try {
    allUsers = await fetchUsers();
    updateCityOptions(allUsers);
    filterAndSortUsers();
  } catch (error) {
    container.innerHTML = `<p>Error: ${error.message}</p>`;
  }
}

searchInput.addEventListener("input", filterAndSortUsers);
sortOrder.addEventListener("change", filterAndSortUsers);
cityFilter.addEventListener("change", filterAndSortUsers);

init();
