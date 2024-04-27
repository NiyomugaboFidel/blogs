

const tableMessageData = document.querySelector('#table-message');
const tableCommentData= document.querySelector('#table-comment');
const tableblogsDataData  = document.querySelector('#table-blogs');
const tablePostData = document.querySelector('#table-post')
let userData 

function getUsers(){
    axios.get('http://localhost:3000/users', {
        headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}` // Include the token in the 'Authorization' header
        }
        },
        {
         withCredentials: true
        
        }).then(response => {
        
        
        console.log(response.data.users)  
        let data = response.data.users
        createTablerow(data)
        })
        .catch(error => {
        console.log('Error accessing dashboard:', error);
        // Redirect to login page or display error message
        //window.location.href = '../../pages/login.html'
        
        });
}
getUsers()


function createTablerow(data){
const tableUserTbody = document.querySelector('#table-user tbody');
tableUserTbody.innerHTML = ``

data.forEach((user, index)=> {
    let tr = document.createElement('tr')
    let a = 0
    tr.classList.add('claminfo')

    tr.innerHTML =`
                    <td>${index +1}</td>
                    <td> 
                    <div class="avatar">
                  <img src=${user.imageUrl} alt="">
                    </div>

              </td>
                    <td>${user._id}</td>
                    <td>${user.username}</td>
                    <td>${user.createdAt}</td>
                    <td>
                    <buttton class="btn edit"><i class="fa-solid fa-edit"></i></buttton> 
                    <button onclick="deleteUser('${user._id}')" class="btn delete"><i class="fa-solid fa-trash"></i></button>
                    </td>
    `   
   tableUserTbody.appendChild(tr)
    
    });


}

const deleteUser = (id)=>{
    axios.delete(`http://localhost:3000/delete/${id}`,{
        headers:{
            Authorization:`Bearer ${localStorage.getItem('token')}`
        }
    },{
        withCredentials: true
    }).then(response=>{
        if(response.ok){
            window.location.reload()
             getUsers()
            console.log('user deleted successfully')
        } else {
            console.log('Error deleting comment:', response.statusText);
          }
          
          window.location.reload()

    }).catch(err=>{
        console.log(err)
    })
}