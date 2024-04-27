
const emaiInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const loginForm = document.querySelector('#loginform');


console.log(emaiInput, passwordInput, loginForm, navAvatar)
loginForm.addEventListener('submit', async(e)=>{
    e.preventDefault();

    const formData = new FormData()
    formData.append('email', emaiInput.value)
    formData.append('password', passwordInput.value)

    try {

         const response =  await axios.post('http://localhost:3000/login', formData,{
            headers:{
                'Content-Type': 'application/json'
            }
        })
        localStorage.setItem('token', response.data.token)
   
        console.log(response.data.userAvatar)
     
       //window.location.href = './index.html'
    } catch (error) {
        console.log(error)
    }
})







 