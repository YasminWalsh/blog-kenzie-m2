export class Header{
    constructor(elementoPai){
        this.elementoPai=elementoPai; //document.getElementbyId('infosUsuario')

    }

    criarHeader(usuario){ //usuario
        
        const div=document.createElement('div');
        div.setAttribute('id','boxInfoHeader')

        const img=document.createElement('img');
        img.src=usuario.avatarUrl;
        img.alt='Imagem avatar';
        img.setAttribute('id','avatarImg');

        const nome=document.createElement('span');
        nome.innerText=usuario.username;
        nome.setAttribute('id','userNameHeader')

        div.append(img,nome);

        const botaoSair=document.createElement('button');
        botaoSair.innerText='Sair'
        botaoSair.setAttribute('id','botaoSair')

       this.elementoPai.append(div,botaoSair);

    }
}