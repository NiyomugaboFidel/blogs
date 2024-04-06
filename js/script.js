  // ##################################################################################################




const navMenu = document.querySelector('.nav_menu_list');
const navBtn = document.querySelector('.nav-btn')
const loginButton = document.getElementsByClassName('.btn-form')
const createBlogButton = document.getElementById('#blog-bnt')
const nameTest = document.getElementById("#name-test")
var formLogin= document.querySelector('.form-container')
var formSignUp = document.querySelector('.form-container1')

const toDashboard = () =>  window.location.href = '../public/dashboard.html'


function myMenuFunction() {
 
    if(navMenu.className !== 'nav_menu_list'){
        navMenu.classList.remove('responsive');
        navBtn.classList.remove('responsive')

    }else{
        navMenu.classList.add('responsive');
        navBtn.classList.add('responsive')
    }
}

window.onscroll = function(){headerNavMenu()};

 function headerNavMenu(){
    const navHeader = document.getElementById('header');
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){

        navHeader.style.boxShadow = '0 1px 6px rgb(0, 0, 0, 0.1)'
        navHeader.style.height= '60px'
        navHeader.style.lineHeight = '60px'
    }else{
        navHeader.style.boxShadow = 'none'
        navHeader.style.height= '65px'
        navHeader.style.lineHeight = '65px'
    }
 }

//  ===================================BACKGROUND-IMAGE-HOMR=================================
  // ##################################################################################################

var imageBox = document.querySelector('.box-image-home');
var backgroundImg = new Array(
    '../public/images/blog/home.png',
    '../public/images/blog/home7.gif',
    '../public/images/blog/home2.jpg',
    '../public/images/blog/home3.jpg',
    '../public/images/blog/home4.jpg',
    '../public/images/blog/home5.jpg',
    '../public/images/blog/home6.jpg',
    '../public/images/blog/home1.jpg',
    '../public/images/blog/home8.gif',
    '../public/images/blog/home9.gif',
)
let i = 0;
setInterval(()=>{
 imageBox.style.backgroundImage ='url("'+backgroundImg[i+1]+'")'
 i++;
 imageBox.style.transition = '2s ease all'
 if(i >= backgroundImg.length -1){
    i = 0;
 }
},10000);

//  ================================load-more-Btn===========================

const loadBtn = document.querySelector('#load-more');
var currentIterm = 3;
loadBtn.onclick = () => {
const boxes = [...document.querySelectorAll('.container-post .box-container .box')];
for(i = currentIterm; i < boxes.length; i++){
    boxes[i].style.display = 'inline-block';
}
 currentIterm += 3; 
 console.log(currentIterm)  

 if(boxes.length <= currentIterm)
 {
    loadBtn.style.display = 'none'
 }
};

// ===================================SEARCH=========================================
const box = [...document.querySelectorAll('.container-post .box-container .box')];

var search = document.querySelector('#search');

  
    search.addEventListener('keyUp',e =>{
     
        box.forEach(post=>{
            if(post.innerText.toLowerCase().includes(
                e.target.value.toLowerCase())){
                
                post.style.display = 'block';
               
            }else{
                post.style.display = 'none'
            }
        });
    });



// ==================================LOGIN-SINGUP-FORM-SHOW- ANIMATIONS=======================
  // ##################################################################################################



 function formShow(){

  if(formLogin.className === 'form-container'){
    formSignUp.style.display = 'none'
    formLogin.style.display = 'flex'
    formLogin.classList.add('active-show');
    formLogin.style.position = 'fixed'
  }else{
    formLogin.classList.remove('active-show');
   
  }

}

let data;

function closeBtn(){
    var form = document.querySelector('.form-container')


  if(form.className === 'form-container'){
    form.classList.add('active-show');
  }else{
    form.classList.remove('active-show');
  }
}
// -----------------------signUp----------------------
 function formShowSignUp(){

  if(formSignUp.className === 'form-container1'){
    formSignUp.classList.add('active-show');
    formLogin.style.display = 'none'
    formSignUp.style.display = 'flex'
    formSignUp.style.position = 'fixed'
  }else{
    formSignUp.classList.remove('active-show');
  }
}

function closeBtnSignUp(){
    var form = document.querySelector('.form-container1')
  if(form.className === 'form-container1'){
    form.classList.add('active-show');
  }else{
    form.classList.remove('active-show');
  }
}


  

  // =======================================DYNAMICS-POSTCARD================LOGICAL=================
  // ##################################################################################################

  window.addEventListener('DOMContentLoaded', ()=>{
    const inputFile = document.querySelector('#inputFile')
    const inputTitle = document.querySelector('#inputTitle')
    const inputName = document.querySelector('#inputName')
    const inputDate = document.querySelector('#inputDate')
    const inputDescription = document.querySelector('#inputDescription')
    const postBtn = document.querySelector('#postBtn')
    const boxContainer = document.querySelector('.box-container');


 

    function createPost(postId, imageUrl, title, description , name,letter, date, likes,comment){
      
        let box = document.createElement('div')
        box.classList.add('box')
    
        box.innerHTML =`
        
        <div class="box-image">
        <a id="post-photo" href="singlepost.html?id=${postId}"><img src="${imageUrl}"></a>
    </div>
    <div class="icons">
        <div style="display: flex;">
            <div class="like">
                <i class="fa-regular fa-heart" style="color:black;"></i>
           
            </div>
            <small  class="like-count" style="font-size: 10px;">${likes}</small>
             <div class="comment">
               
             <a id="post-photo" style="color:black;" href="singlepost.html?id=${postId}"><i id="comment-btn" class="uil uil-comment"></i></a>
             </div>


        </div>
        
        
        <div class="comment">
            <i id="bookmark" class="uil uil-bookmark"></i>
            
        </div>

    </div>
    <div class="post-text">
        <h4 class="category"><a href="singlepost.html?id=${postId}">${title}</a></h4>
        <p class="description">${description}...</p>
    </div>
    <div class="post-avater">
        <div class="profile-avater">
        <div class="letter">
        <h2>${letter}</h2>
       </div>
            <span>${name}</span>
            <p>${date}</p>
          
             
        </div>
        

        <div class="comment-box">
        <p id="comment-view">View All<small id="comment-count">${comment.length}</small>Comments</p>
        </div>

    </div>



   

    </div>


</div>

`    


let likeBtn = box.querySelector('.like')


      // Like button
      
      likeBtn.addEventListener('click', function() {

      

         likeBtn.classList.toggle('liked') 

        if(likeBtn.classList.contains('liked')){
   
       likeBtn.innerHTML = `<i class="fa-solid fa-heart" style="color:red;"></i>`
       const likeCountElement = box.querySelector('.like-count');
       let likes = parseInt(likeCountElement.textContent) || 0;
       likes++;
       likeCountElement.textContent = likes;
         updateLikesInLocalStorage(postId, likes);
  
        }else{
    
    
        likeBtn.innerHTML = `<i class="fa-regular fa-heart" style="color:black;"></i>`
     }

      
      
      });
    


boxContainer.appendChild(box)

        }

function updateLikesInLocalStorage(postId, likes){
    let posts = JSON.parse(localStorage.getItem('posts')) || []
    let updatedPosts = posts.map(post =>{
      if(post.id === postId){
        post.likes = likes;
      }

      return post;
    });
   localStorage.setItem('posts', JSON.stringify(updatedPosts))
}

 const savedPost = JSON.parse(localStorage.getItem('posts')) || []
  savedPost.forEach(post => {
    createPost(post.id, post.imageUrl, post.title, post.description, post.name,post.letter, post.date, post.likes,post.comment)
  });

  postBtn.addEventListener('click', ()=>{
    const postId = Date.now().toString();
    const imageUrl = URL.createObjectURL(inputFile.files[0])
    const title = inputTitle.value;
    const description = inputDescription.value;
    const name = inputName.value;
    const date = inputDate.value;
    const letter = (name.toUpperCase()).charAt(0)
    const comment = ['\n']
    

    
    

    createPost(postId, imageUrl, title, description, name,letter ,date , 0,comment)

    const newPost = {id: postId, imageUrl: imageUrl, title: title, description: description , name: name ,letter:letter,date:date ,likes:0,comment:comment}
    const posts = JSON.parse(localStorage.getItem('posts'))|| []
    posts.push(newPost)
    localStorage.setItem('posts', JSON.stringify(posts));

    

  });

});

 





























