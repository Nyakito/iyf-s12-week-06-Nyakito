function getUserData(userId, callback) {
  setTimeout(() => {
    callback({ id: userId, name: "John" });
  }, 1000);
}

function getUserPosts(userId, callback) {
  setTimeout(() => {
    callback([
      { id: 1, title: "Post 1" },
      { id: 2, title: "Post 2" },
    ]);
  }, 1000);
}

function getPostComments(postId, callback) {
  setTimeout(() => {
    callback([
      { id: 1, text: "Great post!" },
      { id: 2, text: "Thanks for sharing" },
    ]);
  }, 1000);
}

getUserData(1, function (user) {
  console.log("User:", user);

  getUserPosts(user.id, function (posts) {
    console.log("Posts:", posts);

    getPostComments(posts[0].id, function (comments) {
      console.log("Comments:", comments);
    });
  });
});

console.log("\nThis nested structure is called callback hell.");
