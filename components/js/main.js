


window.addEventListener('DOMContentLoaded', ()=>{
    const inputFile = document.querySelector('#inputFile')
    const inputTitle = document.querySelector('#inputTitle')
    const inputDescription = document.querySelector('#inputDescription')

    


 
   
      
    



//     function createPost(postId, imageUrl, title, description , name,letter, date, likes,comment){
      
//         let box = document.createElement('div')
//         box.classList.add('box')
    
//         box.innerHTML =`
        
//         <div class="box-image">
//         <a id="post-photo" href="singlepost.html"><img src="${imageUrl}"></a>
//     </div>
//     <div class="icons">
//         <div style="display: flex;">
//             <div class="like">
//                 <i class="fa-regular fa-heart" style="color:black;"></i>
           
//             </div>
//             <small  class="like-count" style="font-size: 10px;">${likes}</small>
//              <div class="comment">
//                 <i id="comment-btn" class="uil uil-comment"></i>
              
//              </div>

//         </div>
        
        
//         <div class="comment">
//             <i id="bookmark" class="uil uil-bookmark"></i>
//         </div>
//         <small  class="like-count" style="font-size: 10px;">${comment.length}</small>

//     </div>
//     <div class="post-text">
//         <h4 class="category"><a href="singlepost.html">${title}</a></h4>
//         <h3>${description}<a href="singlepost.html" class="read-more">...</a></h3>
//     </div>
//     <div class="post-avater">
//         <div class="profile-avater">
//         <div class="letter">
//         <h2>${letter}</h2>
//        </div>
//             <span>${name}</span>
//             <p>${date}</p>
//         </div>
//     </div>



//     <div class="comment-box">
//         <p id="comment-view">View All<small id="comment-count">0</small>Comments</p>
//         <div class="comment-input">
//             <input type="text" id="input-comment" placeholder="All comment...">
//             <button id="comment-post-btn">Post</button>
//         </div>
      

//     </div>


// </div>

// `    


// let likeBtn = box.querySelector('.like')


//       // Like button
      
//       likeBtn.addEventListener('click', function() {

      

//          likeBtn.classList.toggle('liked') 

//         if(likeBtn.classList.contains('liked')){
   
//        likeBtn.innerHTML = `<i class="fa-solid fa-heart" style="color:red;"></i>`
//        const likeCountElement = box.querySelector('.like-count');
//        let likes = parseInt(likeCountElement.textContent) || 0;
//        likes++;
//        likeCountElement.textContent = likes;
//          //updateLikesInLocalStorage(postId, likes);
  
//         }else{
    
    
//         likeBtn.innerHTML = `<i class="fa-regular fa-heart" style="color:black;"></i>`
//      }

      
      
//       });
    


// boxContainer.appendChild(box)

//         }


        // end of create post

        document.querySelector('#post-form').addEventListener('submit', async(e)=>{
            e.preventDefault()
        
           const postData =new FormData()
           postData.append('image', inputFile.files[0]);
           postData.append('title', inputTitle.value);
           postData.append('description',inputDescription.value);
        
          
                try {
           const response = await axios.post('http://localhost:3000/post/upload', postData,{
               headers: {
                   'Content-Type': 'multipart/form-data',
                   Authorization: `Bearer ${localStorage.getItem('token')}`
                 }
           })
           window.location.reload()
           getPost()
           console.log('created successful ', response.data)
                } catch (error) {
                   console.log(error)
                }
        
        });

       async function getPost(){
            try {
                const response = await axios.get('http://localhost:3000/post/getPosts', {
                    headers: {
                        
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                      }
                },{
                    withCredentias:true
                })
             
                console.log(response.data)
                createTablerowOfPost(response.data.posts)
            
                 
                     } catch (error) {
                        console.log(error)
                     }
             
        }

        getPost()
       
  const createTablerowOfPost = (posts) =>{
    const tableUserTbody = document.querySelector('#table-blogs tbody');
    tableUserTbody.innerHTML = ''

    posts.forEach((post, index) => {
        const tr = document.createElement('tr')

          tr.innerHTML = `
          <tr class="claminfo">
          <td>${index + 1}</td>
          <td> 
          <div class="avatar">
           <img src=${post.imageUrl} alt=${post.username}>
          </div>

           </td>
          <td>${post._id}</td>
        
          
          <td>${post.username}</td>
          <td>${post.title}</td>
          <td><span>${post.comments.length}</span>Comments</td>
          <td><span>${post.likeCount}</span>likes</td>
          <td>${post.date}</td>
          <td><buttton class="btn edit"><i class="fa-solid fa-edit"></i></buttton> <button class="btn delete"><i class="fa-solid fa-trash"></i></button></td>
        `
     tableUserTbody.appendChild(tr)
    });

  }
      

      

        
// function updateLikesInLocalStorage(postId, likes){
//     let posts = JSON.parse(localStorage.getItem('posts')) || []
//     let updatedPosts = posts.map(post =>{
//       if(post.id === postId){
//         post.likes = likes;
//       }

//       return post;
//     });
//    localStorage.setItem('posts', JSON.stringify(updatedPosts))
// }


//  const savedPost = JSON.parse(localStorage.getItem('posts')) || []
//   savedPost.forEach(post => {
//     createPost(post.id, post.imageUrl, post.title, post.description, post.name,post.letter, post.date, post.likes,post.comment)
//   });

//   postBtn.addEventListener('click', async()=>{
//      const postId = Date.now().toString();
//     const image =inputFile.files[0];
//      let imageUrl;
//      await getBase64(image).then((data) => imageUrl=data)
//     const title = inputTitle.value;
//     const description = inputDescription.value;
//     const name = inputName.value;
//     const date =  new Date().toLocaleString().split(",")[0]
//     const letter = (name.toUpperCase()).charAt(0)
//     const comment = []
    
    

    
    

//     createPost(postId, imageUrl, title, description, name,letter ,date , 0,comment)

//     const newPost = {id: postId, imageUrl: imageUrl, title: title, description: description , name: name,letter:letter ,date:date ,likes:0,comment:comment}
//     const posts = JSON.parse(localStorage.getItem('posts'))|| []
//     posts.push(newPost)
//     localStorage.setItem('posts', JSON.stringify(posts));

    // -----------reset----
     document.querySelector('#inputFile').value ='';
     document.querySelector('#inputTitle').value= '';
     document.querySelector('#inputName').value = '';
     document.querySelector('#inputDescription').value ='';
     
   

  });
  
 

  //});


  
  

// =======================================DASHBOARD=====================
const tableUser = document.querySelector('#table-user');
const tableMessage = document.querySelector('#table-message');
const tableComment= document.querySelector('#table-comment');
const tableblogs  = document.querySelector('#table-blogs');
const tablePost = document.querySelector('#table-post')
  

// function deletePost(id){

//     let datas = JSON.parse(localStorage.getItem('posts'));
//     let data = datas.findIndex(postt =>{
//       return postt.id === id
//     })
//     if(data){
//         datas.splice(id,1)
//      localStorage.setItem("posts", JSON.stringify(datas))
//      window.location.reload()
//     }else{
//         console.log("id not found!")
//     }
    
// }
//  -----------------------------user--------------------
    function users(){
    
        tableUser.classList.toggle('user')
        if(tableUser.classList.contains('user') ){
            tableUser.style.display = 'flex';
            tableComment.style.display = 'none';
            tableblogs.style.display = 'none'
            tablePost.style.display = 'none'
        }else{
            tableUser.style.display = 'none';
        }

    }
    // --------------------------------message-------------------------

    // function messages(){
    //     tableMessage.classList.toggle('message')
    //     if(tableMessage.classList.contains('message') ){

    //         tableMessage.style.display = 'flex';
    //         tableUser.style.display = 'none';
    //         tableComment.style.display = 'none';
    //         tableblogs.style.display = 'none'
    //         tablePost.style.display = 'none'
           
    //     }else{
    //         tableMessage.style.display = 'none';
    //     }

    //}
    // --------------------------------comment-----------------------
    function comments(){
        tableComment.classList.toggle('comment')
        if(tableComment.classList.contains('comment')){
            tableComment.style.display = 'flex';
            tableUser.style.display = 'none';
            tableblogs.style.display = 'none'
            tablePost.style.display = 'none'
        }else{
            tableComment.style.display = 'none';
        }

    }

    // -----------------------like---------------
    function blogs(){
    
        tableblogs.classList.toggle('blogs')
        if(tableblogs.classList.contains('blogs')){
            tableblogs.style.display = 'flex'
          
            tableUser.style.display = 'none'
            tableComment.style.display = 'none'
            tablePost.style.display = 'none'
        }else{
            tableblogs.style.display = 'none'
        } 
    }

    

    // -------------------post------------------
    function post(){
        tablePost.classList.toggle('post')
        if(tablePost.classList.contains('post')){
            tablePost.style.display = 'flex'

            tableUser.style.display = 'none'
            tableComment.style.display = 'none'
            tableblogs.style.display = 'none'

        }else{
            tablePost.style.display = 'none'
        } 
    }
function homePage(){
    window.location.href = '../../pages/index.html'
}

// function getBase64(file){
//     return new Promise((resolve, reject) => {
//         const reader = new FileReader();
//         reader.readAsDataURL(file)
//         reader.onload = ()  => resolve(reader.result);
//         reader.onerror = (error) => reject(error)
//     })
// }




