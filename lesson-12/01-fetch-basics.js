async function getUser(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("User data:", data);
    return data;
  } catch (error) {
    console.error("Failed to fetch user:", error);
  }
}

async function loadUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const users = await response.json();
    console.log("All users:", users);
    return users;
  } catch (error) {
    console.error("Failed to fetch users:", error);
  }
}

async function getPostsForUser(userId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}/posts`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const posts = await response.json();
    console.log(`Posts for user ${userId}:`, posts);
    return posts;
  } catch (error) {
    console.error("Failed to fetch posts:", error);
  }
}

async function main() {
  await getUser(1);
  await loadUsers();
  await getPostsForUser(1);
}

main();
