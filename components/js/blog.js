



const params = (new URL(document.location)).searchParams;
let postId= params.get('id')
console.log("id", postId) 

async function getPost(){
    try {
        const response = await axios.get(`http://localhost:3000/post/getPost/${postId}`, {
            headers: {
                
                Authorization: `Bearer ${localStorage.getItem('token')}`
              }
        },{
            withCredentias:true
        })
     
        console.log(response.data)
        getSinglePost(response.data.post)
    
         
             } catch (error) {
                console.log(error)
             }
     
}

getPost()


 
async function getComment(){
    try {
        const response = await axios.get(`http://localhost:3000/post/${postId}/comments`, {
            headers: {
                
                Authorization: `Bearer ${localStorage.getItem('token')}`
              }
        },{
            withCredentias:true
        })
     
        console.log(response)
        getSingleComment(response.data.comments)
    
         
             } catch (error) {
                console.log(error)
             }
     
}

getComment()

function getSingleComment(comments){
    const commentBox = document.querySelector('.comment-display')
    commentBox.innerHTML = ``
    console.log(commentBox)

 comments.forEach((comment, index)=> {

    const div = document.createElement('div');
    div.innerHTML = `
    
    <div class="comments"> 
    <div class="single-avater">
   <div class="avater-profile-single">
   <div class="letter">
   <div class="avatar">
   <img src=${comment.avatar} alt=${comment.username}>
  </div>
  </div>
       <span>${comment.username}</span>
       <p style="font-size:8px;">${comment.createdAt}</p>
   </div>
   </div>  
   <p class="com-dis">${comment.content}</P>  
   </div>
   `
 commentBox.appendChild(div)  


 });

}


const singlePost = document.querySelector('.singlepost-box')

function getSinglePost(post){

    singlePost.innerHTML =`
   
    <h2>
        The Impact of Technology on the Workplace:How 
        Technology is Changing
    </h2>
    <div class="single-avater">
        <div class="avater-profile-single">
        <div class="letter">
        <div class="avatar">
        <img src=${post.avatar} alt=${post.username}>
       </div>
       </div>
            <span>${post.username}</span>
            <p>${post.date}</p>
        </div>
    </div>    
    
    <div class="post1" id="single-post">
        <!-- =====================singlepost==================== -->
        <img src="${post.imageUrl}" alt="">
        <h3>${post.title}</h3> 
        <p>
            ${post.description}
        </p>
    
        <div class="comment-box">
        <p id="comment-view">View All<small id="comment-count">${post.comments.length}</small>Comments</p>
        <div class="comment-input">
            <input type="text" id="input-comment" placeholder="All comment...">
            <button type="submit" id="comment-btn">Post</button>
        </div>
        <div class="comment-display">

        </div>
    </div>
   
</div>
   
  `

  }

  getSinglePost()


 

const commentInput = document.querySelector('#input-comment')
const commentBtn = document.querySelector('#comment-btn')
 console.log(commentInput)


//create comment

commentBtn.addEventListener('submit',async(e)=>{
    e.preventDefault()

const formData = new FormData();
formData.append('comment',commentInput.value)
 try {
   const responce =  await axios.post(`http://localhost/3000/post/${postId}/comment`, formData,{
        headers:{
            Authorization:` Bearer ${localStorage.getItem('token')}`
        }
    },{
        withCredentias: true
    })
    console.log(responce)
    
 } catch (error) {
    console.log('Failed to post comment ',error)
    
    
 }


 document.querySelector('#input-comment').value = '' 
 window.location.reload()  
})
  
  
  

 

  

