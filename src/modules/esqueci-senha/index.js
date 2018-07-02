import './main.css'
import login from '../login';
const esqueciSenha = async () => {
    const html = `<div id="esqueci-senha-modal" class="modal" data-backdrop=false>
    <div class="modal-dialog modal-dialog-centered" id="esqueci-senha-modal-dialog">
        <div class="modal-content">
            <div class="modal-header" >
                <span data-toggle="tooltip" data-placement="top" title="Voltar">
                    <i class="fas fa-chevron-circle-left"></i>
                </span>
                <h4 class="modal-title">Esqueceu sua senha?</h4>
            </div>
            <div class="modal-body">
                <div class="alert alert-info" role="alert">
                    Preencha com seu email abaixo que lhe enviaremos um link para redefinição de sua senha.
                </div>
                <form onsubmit="return false">
  
                    <div class="group">
                        <input type="email" placeholder=" " required>
                        <span class="bar"></span>
                        <label>Email</label>
                    </div>
                      <button type="submit" class="btn btn-primary" id="enviar">Enviar <i class="far fa-paper-plane"></i></button>
                </form>
            </div>
        </div>
    </div>
  </div>`
    $("#main").append(html)
    $("#esqueci-senha-modal").animate({ bottom: '-=200%' }, 1, () => {
        $("#esqueci-senha-modal").modal({keyboard: false})
        $("#esqueci-senha-modal").modal('show')
        $("#esqueci-senha-modal").animate({ bottom: '+=200%' }, 400)
    })
    $('[data-toggle="tooltip"]').tooltip()
    $('.modal-header span').mouseup(()=>{
        $('[data-toggle="tooltip"]').tooltip('hide')
        login()
        $("#esqueci-senha-modal").animate({ bottom: '-=200%' }, ()=>{
            $("#esqueci-senha-modal").remove()
        })
        
    })
}

export default esqueciSenha