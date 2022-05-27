import { Api } from "../controllers/Api.js";
import { Header } from "../models/Header.js";
import { CriarPost} from "../models/CriarPost.js";
import { ListarPosts } from "../models/ListarPosts.js";

console.log(Api.token)

/* HEADER */
const usuario= await Api.listarUsuario();
console.log(usuario);

const header= new Header(document.getElementById('infosUsuario'));
header.criarHeader(usuario);

document.getElementById('botaoSair').addEventListener('click', (event)=>{
    localStorage.clear();
    window.location='../../../index.html';
    
})

/* Criar Post */

const criarPost = new CriarPost(document.getElementById('criarPost'));
criarPost.renderizar();

/* listar post */
let pagina=1;
const listaPosts= new ListarPosts(document.getElementById('postsApi'));
let ultimapagina= await listaPosts.renderizar(pagina);

document.getElementById('botaoPagAnterior').addEventListener('click',async ()=>{
    if(pagina===1) return;
    pagina--;
    ultimapagina= await listaPosts.renderizar(pagina);
})

document.getElementById('botaoPagPosterior').addEventListener('click', async ()=>{
    
    if(pagina===ultimapagina) return;
    pagina++;
    ultimapagina=await listaPosts.renderizar(pagina);
})



/* avatarUrl: "https://i.pinimg.com/564x/f0/af/cb/f0afcbce7ed4a7df7b822964501bf995.jpg"
createdAt: "2022-03-11"
email: "nana@gmail.com"
id: "debb8152-8a37-49f4-bdc2-0c7948e5d8cd"
username: "nana" */