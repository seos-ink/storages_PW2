
function FazerPedido(event) {
    event.preventDefault();

    let nome = document.getElementById('nome').value;
    let endereco = document.getElementById('endereco').value;
    let pizza = document.getElementById('pizza').value;
    let OBS = document.getElementById('observacoes').value;

    sessionStorage.setItem('username', nome);
    sessionStorage.setItem('endereco', endereco);
    sessionStorage.setItem('pizza', pizza);
    sessionStorage.setItem('obs', OBS);


    Swal.fire({
        title: "Pedido enviado!!",
        text: "Pedido realizado com sucesso!",
        icon: "success"
        , buttonsStyling: 'false'
    });
}
function FazerCadastro(event) {
    event.preventDefault();

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let senha = document.getElementById('senha').value;
    let confirmar = document.getElementById('confirmarSenha').value;

    if (senha == confirmar ){
        if (localStorage.getItem('cookiesAceitos') === 'true') {
        localStorage.setItem('nome', nome)
        localStorage.setItem('email', email)
        localStorage.setItem('telefone', telefone)
        localStorage.setItem('senha', senha)

        sessionStorage.setItem('nome', nome)
        sessionStorage.setItem('email', email)
        sessionStorage.setItem('telefone', telefone)
        sessionStorage.setItem('senha', senha)

        Swal.fire({
            title: "Cadastrado!!",
            text: "Cadastro realizado com êxito",
            icon: "success"
            , buttonsStyling: 'false'
        });
    }else{
        sessionStorage.setItem('nome', nome)
        sessionStorage.setItem('email', email)
        sessionStorage.setItem('telefone', telefone)
        sessionStorage.setItem('senha', senha)

        Swal.fire({
            title: "Cadastrado!!",
            text: "Cadastro realizado com êxito",
            icon: "success"
            , buttonsStyling: 'false'
        });
    }

    } else {
        alert('confirmar senha está errado')
    }
}


 function esconder() {
      document.getElementById('cookieBanner').style.display = 'none';
    }

    function aceitar() {
      localStorage.setItem('cookiesAceitos', 'true');
      esconder();
    }
    function recusar() {
      localStorage.setItem('cookiesAceitos', 'false');
      esconder();
    }
    window.onload = function () {
      if (localStorage.getItem('cookiesAceitos') === 'true') {
        esconder();
      }
    }