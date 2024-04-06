



const params = (new URL(document.location)).searchParams;
const name= params.get('id')
console.log("id", name) 
const posts = JSON.parse(localStorage.getItem('posts'));

const postDisplay = posts.find(post => post.id === name)
console.log("blog", postDisplay)
console.log(postDisplay.comment)
const singlePost = document.querySelector('.singlepost-box')

function getSinglePost(){

    singlePost.innerHTML =`
    <div class="category-btn">
        <button>${postDisplay.title}</button>
    </div>
    <h2>
        The Impact of Technology on the Workplace:How 
        Technology is Changing
    </h2>
    <div class="single-avater">
        <div class="avater-profile-single">
        <div class="letter">
        <h2>${postDisplay.letter}</h2>
       </div>
            <span>${postDisplay.name}</span>
            <p>${postDisplay.date}</p>
        </div>
    </div>    
    
    <div class="post1" id="single-post">
        <!-- =====================singlepost==================== -->
        <img src="${postDisplay.imageUrl}" alt="">
        <h3>${postDisplay.title}</h3> 
        <p>
            ${postDisplay.description}
        </p>
        <div class="comment-box">
        <p id="comment-view">View All<small id="comment-count">${postDisplay.comment.length}</small>Comments</p>
        <div class="comment-input">
            <input type="text" id="input-comment" placeholder="All comment...">
            <button id="comment-btn">Post</button>
        </div>
        <div class="comments"> 
         <div class="single-avater">
        <div class="avater-profile-single">
        <div class="letter">
        <h2>${postDisplay.letter}</h2>
       </div>
            <span>${postDisplay.name}</span>
            <p>${postDisplay.date}</p>
        </div>
        </div>  
        <p class="com-dis">.</P>  
        </div>
    </div>
   
</div>
   
  `
  const comments = document.querySelector('.comments')
  const commentDis = document.createElement('p')
  commentDis.classList.add('com-dis')
  commentDis.textContent = `${postDisplay.comment}`
  comments.appendChild(commentDis)
  }

  getSinglePost()

const commentInput = document.querySelector('#input-comment')
const commentBtn = document.querySelector('#comment-btn')
 console.log(commentInput)
commentBtn.addEventListener('click',()=>{
    postDisplay.comment.push(commentInput.value)
    console.log(postDisplay.comment)
    localStorage.setItem('posts', JSON.stringify(posts))
    document.querySelector('#input-comment').value = '' 
    window.location.reload()
}) 
  
  
  

 

  

