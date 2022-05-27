import { Api } from "../controllers/Api.js";
import { Editar, Excluir } from "./modais.js";

export class ListarPosts{
    constructor(elementoPai){
        this.elementoPai=elementoPai; //document.getElemenById('postsApi')
       /*  this.paginaAtual=1;
        this.data = await Api.listarPosts(this.paginaAtual); */
    }

    async renderizar(pagina){
        const data = await Api.listarPosts(pagina);
        this.elementoPai.innerHTML='';
        data.data.forEach((post) => {
            const li= document.createElement('li');
            li.setAttribute('id',post.id);
            li.classList.add('boxPost');

            const boxUsuario=document.createElement('div');
            boxUsuario.setAttribute('id','boxUsuario');

            const imgAvatar= document.createElement('img');
            imgAvatar.src=post.owner.avatarUrl;
            imgAvatar.alt='Avatar';
            imgAvatar.setAttribute('id', 'imgAvatarPost')


            const nome=document.createElement('span');
            nome.innerText=`Feito por \n${post.owner.username}`;

            boxUsuario.append(imgAvatar,nome);
            
            /* colocar o texto do post em um elemento separado */
            const div= document.createElement('div');
            div.setAttribute('id','campoPost')
            div.innerHTML=`<p>${post.post}</p>`;

            /* console.log('id', post.owner.id) */
            if(post.owner.id==Api.userId){
                const botaoEditar=document.createElement('button');
                botaoEditar.setAttribute('id', 'botaoEditarPost');
                botaoEditar.classList.add('botoesPost');
                botaoEditar.innerText='Editar';
                botaoEditar.dataset.id = post.id;
                botaoEditar.addEventListener('click', (event)=>{
                    console.log(event.target.dataset.id)
                    const editar = new Editar(event.target.dataset.id, div)
                })

                const botaoDeletar=document.createElement('button');
                botaoDeletar.setAttribute('id', 'botaoDeletarPost');
                botaoDeletar.classList.add('botoesPost');
                botaoDeletar.innerText='Excluir';
                botaoDeletar.dataset.id = post.id;
                botaoDeletar.addEventListener('click', (event)=>{
                    const excluir = new Excluir(event.target.dataset.id, li)
                })

                const botoes=document.createElement('div');
                botoes.setAttribute('id', 'boxBotoesPost');

                botoes.append(botaoEditar,botaoDeletar);
                div.appendChild(botoes);                
            }
            li.append(boxUsuario,div);
           

            this.elementoPai.appendChild(li);
            
        }); 
        this.atualizaMarcadorPagina(pagina); 
        return data.lastPage; 

    }

    atualizaMarcadorPagina(pagina){
        const marcador= document.getElementById('pagAtual');
        marcador.innerText=pagina;
    }


}