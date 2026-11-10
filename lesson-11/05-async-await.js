function getUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId > 0) {
        resolve({ id: userId, name: "John" });
      } else {
        reject("Invalid user ID");
      }
    }, 1000);
  });
}

function getUserPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: "Post 1" },
        { id: 2, title: "Post 2" },
      ]);
    }, 1000);
  });
}

function getPostComments(postId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, text: "Great post!" },
        { id: 2, text: "Thanks for sharing" },
      ]);
    }, 1000);
  });
}

async function getDataWithAsync() {
  const user = await getUserData(1);
  const posts = await getUserPosts(user.id);
  const comments = await getPostComments(posts[0].id);
  return comments;
}

async function main() {
  try {
    const comments = await getDataWithAsync();
    console.log("Async/await result:", comments);

    const [user1, user2, user3] = await Promise.all([
      getUserData(1),
      getUserData(2),
      getUserData(3),
    ]);

    console.log("Three users fetched in parallel:", user1, user2, user3);
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
}

main();
