// ---- Setup ----
const STORAGE_KEY = "simpleBlogPosts";

const postForm = document.getElementById("post-form");
const titleInput = document.getElementById("title-input");
const imageInput = document.getElementById("image-input");
const contentInput = document.getElementById("content-input");
const postsList = document.getElementById("posts-list");

// Track which post (if any) is currently being edited
let editingId = null;

// ---- Storage helpers ----
function getPosts() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

function savePosts(posts) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

// ---- Render ----
function renderPosts() {
  const posts = getPosts();
  postsList.innerHTML = "";

  if (posts.length === 0) {
    postsList.innerHTML = '<p class="no-posts">No posts yet. Add one above!</p>';
    return;
  }

  // Show newest posts first
  posts.slice().reverse().forEach((post) => {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");

    if (editingId === post.id) {
      // Render inline edit form for this post
      postDiv.innerHTML = `
        <div class="edit-form">
          <input type="text" class="edit-title" value="${escapeHtml(post.title)}">
          <input type="text" class="edit-image" value="${escapeHtml(post.image || "")}" placeholder="Image URL (optional)">
          <textarea class="edit-content" rows="5">${escapeHtml(post.content)}</textarea>
          <div class="edit-buttons">
            <button class="save-btn">Save</button>
            <button class="cancel-btn">Cancel</button>
          </div>
        </div>
      `;

      postDiv.querySelector(".save-btn").addEventListener("click", () => {
        const newTitle = postDiv.querySelector(".edit-title").value.trim();
        const newImage = postDiv.querySelector(".edit-image").value.trim();
        const newContent = postDiv.querySelector(".edit-content").value.trim();

        if (!newTitle || !newContent) {
          alert("Title and post content cannot be empty.");
          return;
        }

        updatePost(post.id, newTitle, newImage, newContent);
        editingId = null;
        renderPosts();
      });

      postDiv.querySelector(".cancel-btn").addEventListener("click", () => {
        editingId = null;
        renderPosts();
      });

    } else {
      // Normal display mode
      postDiv.innerHTML = `
        <h3>${escapeHtml(post.title)}</h3>
        ${post.image ? `<img src="${escapeHtml(post.image)}" alt="${escapeHtml(post.title)}">` : ""}
        <p>${escapeHtml(post.content)}</p>
        <div class="post-buttons">
          <button class="edit-btn">Edit</button>
          <button class="delete-btn">Delete</button>
        </div>
      `;

      postDiv.querySelector(".edit-btn").addEventListener("click", () => {
        editingId = post.id;
        renderPosts();
      });

      postDiv.querySelector(".delete-btn").addEventListener("click", () => {
        if (confirm("Are you sure you want to delete this post?")) {
          deletePost(post.id);
          renderPosts();
        }
      });
    }

    postsList.appendChild(postDiv);
  });
}

// ---- CRUD operations ----
function addPost(title, image, content) {
  const posts = getPosts();
  const newPost = {
    id: Date.now(),
    title,
    image,
    content
  };
  posts.push(newPost);
  savePosts(posts);
}

function updatePost(id, title, image, content) {
  const posts = getPosts();
  const index = posts.findIndex((p) => p.id === id);
  if (index !== -1) {
    posts[index].title = title;
    posts[index].image = image;
    posts[index].content = content;
    savePosts(posts);
  }
}

function deletePost(id) {
  let posts = getPosts();
  posts = posts.filter((p) => p.id !== id);
  savePosts(posts);
}

// ---- Utility: prevent basic HTML injection from post text ----
function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// ---- Form submit ----
postForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = titleInput.value.trim();
  const image = imageInput.value.trim();
  const content = contentInput.value.trim();

  if (!title || !content) {
    alert("Please fill in a title and your post content.");
    return;
  }

  addPost(title, image, content);

  postForm.reset();
  renderPosts();
});

// ---- Initial render on page load ----
renderPosts();
