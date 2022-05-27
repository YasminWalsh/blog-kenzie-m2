export class Api{
    static token = localStorage.getItem('token');
    static userId= localStorage.getItem('userId');

    static async cadastroUsuario(data){
        const response = await fetch(
            'https://api-blog-m2.herokuapp.com/user/register',
            {
              method: 'POST', // Indica o tipo de requisição GET, POST, PATCH, DELETE
              headers: {
                'Content-Type': 'application/json' // Indica o tipo de dado da requisição
              },
              body: JSON.stringify(data) // Informando as informações do usuário
            }
        )
            .then(res => res.json())
            .then(res => res)
            .catch(error => error)
      
        return response
    }

    static async loginUsuario(data){
        const token = await fetch(
            'https://api-blog-m2.herokuapp.com/user/login',
            {
                method: 'POST', // Indica o tipo de requisição GET, POST, PATCH, DELETE
                headers: {
                    'Content-Type': 'application/json' // Indica o tipo de dado da requisição
                },
                body: JSON.stringify(data) // Informando as informações do usuário
            }
        )
            .then(res => res.json())
            .then(res => res)
            .catch(error => error)
      
        Api.token = token //Sempre que fizermos a requisição nosso token será atualizado
        console.log(Api.token)
        return token

    }

/*     https://api-blog-m2.herokuapp.com/user/86e1a659-fc49-4c5e-b2e4-ee286e4c901f */ 
    static async listarUsuario() {
        const response = await fetch(
          `https://api-blog-m2.herokuapp.com/user/${Api.userId}`,
          {
            method: 'GET', // Indica o tipo de requisição GET, POST, PATCH, DELETE
            headers: {
              'Content-Type': 'application/json', // Indica o tipo de dado da requisição
              Authorization: `Bearer ${Api.token}` // Adicionamos um token de acesso validado pelo header Authorization
            }
          }
        )
          .then(res => res.json())
          .then(res => res)
          .catch(error => error)
    
        return response
    }

  static async criarPost(data) {
    const response = await fetch(
      'https://api-blog-m2.herokuapp.com/post',
      {
        method: 'POST', // Indica o tipo de requisição GET, POST, PATCH, DELETE
        headers: {
          'Content-Type': 'application/json', // Indica o tipo de dado da requisição
          Authorization: `Bearer ${Api.token}` // Adicionamos um token de acesso validado pelo header Authorization
        },
        body:JSON.stringify(data)
      }
    )
      .then(res => res.json())
      .then(res => res)
      .catch(error => error)

    return response
  }

  static async listarPosts(pag){
    const response= await fetch(
      `https://api-blog-m2.herokuapp.com/post?page=${pag}`,
      {
        method:'GET',
        headers:{
          'Content-Type':'application/json',
          Authorization: `Bearer ${Api.token}`
        }
      }
    )
      .then(res => res.json())
      .then(res => res)
      .catch(error => error)
      console.log('API',response)
    return response
  }

  static async editarPost(idPost, data){
    const response= await fetch(
      `https://api-blog-m2.herokuapp.com/post/${idPost}`,
      {
        method:'PATCH',
        headers:{
          'Content-Type':'application/json',
          Authorization: `Bearer ${Api.token}`
        },
        body:JSON.stringify(data)
      }
    )
      .then(res => res.json())
      .then(res => res)
      .catch(error => error)
      console.log('API',response)
    return response;
  }

  static async deletarPost(idPost){
    await fetch(
      `https://api-blog-m2.herokuapp.com/post/${idPost}`,
      {
        method:'DELETE',
        headers:{
          'Content-Type':'application/json',
          Authorization: `Bearer ${Api.token}`
        }
      }
    )
  }


}
