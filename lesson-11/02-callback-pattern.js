function fetchData(callback) {
  setTimeout(() => {
    const data = { name: "John", age: 30 };
    callback(data);
  }, 1000);
}

fetchData((data) => {
  console.log("Data received:", data);
});

function loadUser(userId, callback) {
  setTimeout(() => {
    const user = {
      id: userId,
      name: "Jane Doe",
      email: "jane@example.com",
    };
    callback(user);
  }, 1500);
}

loadUser(7, (user) => {
  console.log("Loaded user:", user);
});
