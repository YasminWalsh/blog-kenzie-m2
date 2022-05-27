import { Api } from "../controllers/Api.js";

export class CriarPost{
    constructor(elementoPai){
        this.elementoPai=elementoPai;
       
    }

    renderizar(){
        const texto=document.createElement('textarea');
        texto.name='content';
        texto.placeholder='Digite aqui o que deseja publicar...';
        texto.classList.add('field');

        const botaoCriar=document.createElement('button');
        botaoCriar.innerText='Postar';
        botaoCriar.setAttribute('id','botaoCriar')
        botaoCriar.addEventListener('click', this.postar)

        
        this.elementoPai.append(texto,botaoCriar);
    }

    async postar(){
        const campo= document.getElementsByClassName('field')[0];
        let post={
            content:campo.value,
        }
        console.log(Api.token)
        console.log(await Api.criarPost(post));
    }
}