const form = document.getElementById("post-form");
const result = document.getElementById("result");

async function createPost(title, body, userId) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      body,
      userId,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to create post");
  }

  return response.json();
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const title = document.getElementById("title").value.trim();
  const body = document.getElementById("body").value.trim();
  const userId = Number(document.getElementById("userId").value);

  try {
    const newPost = await createPost(title, body, userId);

    result.classList.remove("hidden");
    result.innerHTML = `
      <h2>Created Post</h2>
      <p><strong>ID:</strong> ${newPost.id}</p>
      <p><strong>Title:</strong> ${newPost.title}</p>
      <p><strong>Body:</strong> ${newPost.body}</p>
      <p><strong>User ID:</strong> ${newPost.userId}</p>
    `;

    form.reset();
    document.getElementById("userId").value = 1;
  } catch (error) {
    result.classList.remove("hidden");
    result.innerHTML = `<strong>Error:</strong> ${error.message}`;
  }
});
