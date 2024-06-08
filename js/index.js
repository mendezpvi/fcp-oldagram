import { posts } from "/js/data.js";

const commentWrap = document.getElementById("comment-wrap")

function createPost(data) {
  let allPost = ""
  for (let i = 0; i < posts.length; i++) {
    let post = `
    <section class="post">
      <header>
        <div class="container user-info">
          <img src=${data[i].avatar} alt=${data[i].name} class="user-avatar">
          <h2 class="user-full-name">${data[i].name}</h2>
          <h3 class="user-location">${data[i].location}</h3>
        </div>
      </header>

      <div>
        <img src=${data[i].post} alt="" class="post-img">
      </div>

      <div class="container">
        <div class="icon-wrap">
          <button class="btn heart-btn">
          <img src="./assets/icon/icon-heart.png" alt="" class="icon">
          </button>
          <button class="btn comment-btn">
          <img src="./assets/icon/icon-comment.png" alt="" class="icon">
          </button>
          <button class="btn dm-btn">
          <img src="./assets/icon/icon-dm.png" alt="" class="icon">
          </button>
        </div>
        
        <div class="like-count">
        <span class="count" id="count-like">${data[i].likes}</span>
        <span class="text">likes</span>
        </div>
        
        <div class="comment-wrap">
        <p class="comment"><span class="nickname">${data[i].username}</span> ${data[i].comment}</p>
        </div>
      </div>
    </section>
    `
    allPost += post
  }
  return allPost
}

function renderPost() {
  let getAllPost = createPost(posts)
  commentWrap.innerHTML += getAllPost
}

renderPost()