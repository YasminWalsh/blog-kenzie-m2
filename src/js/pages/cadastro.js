import {Api} from "../controllers/Api.js";

function mensagem(text) {
    const textoErro=document.getElementById('messagemErro');
    textoErro.innerText=text;
}

document.getElementById('botaoCadastro').addEventListener('click', async (event)=>{
    console.log('funfou')
    const campo= document.getElementsByClassName('field');
    console.log(campo)
    let usuarioCadastrado= {
        username:campo[0].value,
        email:campo[1].value,
        avatarUrl:campo[2].value,
        password:campo[3].value,
    };
    let response = await Api.cadastroUsuario(usuarioCadastrado)
    if (response.status == 'error') return mensagem(response.message);
    window.location="../../src/pages/login.html"
    
    console.log(usuarioCadastrado)
});