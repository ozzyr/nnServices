import './login.css'

import esqueciSenha from '../esqueci-senha';
import { alerts } from '../alerts';
import { init } from '../init';

const login = () => {
    const html = `
  <div id="login-modal" class="modal" data-backdrop=false>
  <div class="modal-dialog modal-dialog-centered" id="login-modal-dialog">
      <div class="modal-content">
          <div class="modal-header" >
              <h4 class="modal-title">Login</h4>
          </div>
          <div class="modal-body">
              <div style="margin-top:-10px; text-align:center; margin-bottom: 30px"><img src="img/logos/igv.png" width="200px"></div>
              <form id="form-login" method="post" onsubmit="return false">

                  <div class="group">
                      <input type="email" placeholder=" " autocomplete="off" value="fabio@fabio.com" name="user" required>
                      <span class="bar"></span>
                      <label>Email ou Usuário</label>
                  </div>

                  <div class="group">
                      <input type="password" placeholder=" " name="password" value='161283' required>
                      <span class="bar"></span>
                      <label>Senha</label>
                  </div>
                    <button type="submit" class="btn btn-primary" id="logIn" ><i class="fas fa-sign-in-alt"></i> Entrar</button>
                    <br>
                    <a href="javascript: void(0)" id="link-esqueci-senha">Esqueci minha senha</a>
              </form>
          </div>
      </div>
  </div>
</div>
`

    document.querySelector("#main").innerHTML = html
    $("#login-modal").animate({ top: '-=200%' }, 1, () => {
        $("#login-modal").modal({ keyboard: false })
        $("#login-modal").modal('show')
        return $("#login-modal").animate({ top: '+=200%' }, 400)
    })

    document.querySelector('#link-esqueci-senha').onclick = () => {
        $('#login-modal').animate({ top: '-=200%' }, 400, () => {
            $("#login-modal").remove()
        })
        esqueciSenha()
    }

    document.querySelector('#form-login').onsubmit = e => {
        ajax({ url: 'login', method: 'post', body: { user: e.target.user.value, password: e.target.password.value } })
            .then(response => {
                $('#login-modal').animate({ top: '-=200%' }, 200, () => {
                    $("#login-modal").modal('hide')
                   $("#login-modal").remove()
                    init()
                })
            })
            .catch(error => {
                alerts({ message: `<strong>:(</strong> <br> ${error.data.message} `, type: 'danger' })
            })
        return false;
    }
    $('body').css({background: 'url("http://localhost:9000/img/backgrounds/background1.jpg")'})
    //document.querySelector("#logIn").click()
}
export default login