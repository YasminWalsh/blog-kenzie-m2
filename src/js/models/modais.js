import { Api } from "../controllers/Api.js"

export class Editar{
    constructor(id, div){
        this.id = id
        this.modal(true)
        document.getElementById('Editar').addEventListener('click', ()=>{
            Editar.confirmar(this.id, div)
            this.modal(false)
        })
        document.getElementsByClassName('fecharModal')[0].addEventListener('click', ()=>this.modal(false))
    }

    modal(aberto){
        const element = document.getElementsByClassName('modalContainer')[0]
        if(aberto){
            element.classList.add('mostrar')
        } else {
            element.classList.remove('mostrar')
        }
    }

    static confirmar(id, div){
        const text = document.getElementById('inputEditar').value
        Api.editarPost(id, {
            newContent:text
        })
        div.firstChild.innerText=text;
    }
}

export class Excluir{
    constructor(id, li){
        this.id = id
        this.modal(true)
        document.getElementById('Confirma').addEventListener('click', ()=>{
            Excluir.confirmar(this.id, li)
            this.modal(false)
        })
        document.getElementsByClassName('fecharModal')[1].addEventListener('click', ()=>this.modal(false))
        document.getElementById('Nega').addEventListener('click', ()=>this.modal(false))
    }

    modal(aberto){
        const element = document.getElementsByClassName('modalContainer')[1]
        if(aberto){
            element.classList.add('mostrar')
        } else {
            element.classList.remove('mostrar')
        }
    }

    static confirmar(id, li){
        Api.deletarPost(id);
        li.remove();
    }
}