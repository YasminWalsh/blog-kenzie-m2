import {Api} from "../controllers/Api.js";


function mensagem(text) {
  const textoErro=document.getElementById('messagemErro');
  textoErro.innerText=text;
}

document.getElementById('botaoLogin').addEventListener('click', async (event) => {
    const campo = document.getElementsByClassName('fieldLogin')
    let usuarioLogin = {
      email: campo[0].value,
      password: campo[1].value
    }
    let response = await Api.loginUsuario(usuarioLogin);
    localStorage.setItem('token', response.token);
    localStorage.setItem('userId', response.userId);
    
    if (response.status == 'error') return mensagem(response.message);
    console.log(response)
    console.log(Api.token)
    
    window.location = '../../src/pages/blog.html'
});


 

/* 
token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRlYmI4MTUyLThhMzctNDlmNC1iZGMyLTBjNzk0OGU1ZDhjZCIsImlhdCI6MTY1MjgzMDYzNCwiZXhwIjoxNjUyOTE3MDM0fQ.0jfAR297eij-EOL_vptGNe7vgbGv52G85vzhNmGoVho"
userId: "debb8152-8a37-49f4-bdc2-0c7948e5d8cd"
nana@gmail.com 
nana */

/* token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA1NGZjYzQ0LWUyYzMtNGYxNC04NGY3LTI5YTA2NTBiYWIxNyIsImlhdCI6MTY1Mjg3OTcwMCwiZXhwIjoxNjUyOTY2MTAwfQ.89AigraOXcJRlcrIjMwUOZ7j4HnB2XbcnpmVHbMQqpI"
userId: "054fcc44-e2c3-4f14-84f7-29a0650bab17" 
bobEsponja@gmail.com
bob
*/