const companyFormContainer = (params = {})=>{
    const component = `
    <div class="modal fade" id="modal-company" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <span id="title-logo">
                    <i class="far fa-image fa-2x "></i>
                </span>
                <h5 class="modal-title mx-sm-2">Nova Empresa</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">

                <form class="form" id="form-company">

                    <div class="form-group mb-2 mx-sm-3">
                        <div class="group">
                            <input type="text" placeholder=" " autocomplete="off" name="companyRazao" required>
                            <span class="bar"></span>
                            <label>Razão Social*</label>
                        </div>
                    </div>

                    <div class="form-group mb-2 mx-sm-3">
                        <div class="group">
                            <input type="text" placeholder=" " autocomplete="off" name="companyFantasia" required>
                            <span class="bar"></span>
                            <label>Nome Fantasia*</label>
                        </div>
                    </div>

                    <div class="form-inline">

                        <div class="form-group mb-2 mx-sm-3">
                            <div class="group">
                                <input type="text" placeholder=" " autocomplete="off" name="cnpj" required>
                                <span class="bar"></span>
                                <label>CNPJ*</label>
                            </div>
                        </div>

                        <div class="form-group mb-2 mx-sm-3 ">
                            <div class="group">
                                <input type="text" placeholder=" " autocomplete="off" name="ie" required>
                                <span class="bar"></span>
                                <label>Inscrição Estadual*</label>
                            </div>
                        </div>

                        <div class="form-group mb-2 mx-sm-3">
                            <div class="group">
                                <input type="text" placeholder=" " autocomplete="off" name="im">
                                <span class="bar"></span>
                                <label>Inscrição Municipal</label>
                            </div>
                        </div>

                        <div class="form-group mb-2 mx-sm-3">
                            <div class="group">
                                <input type="text" placeholder=" " autocomplete="off" name="cep">
                                <span class="bar"></span>
                                <label>CEP</label>
                            </div>
                        </div>

                        <div class="form-group mb-2 mx-sm-3">
                            <div class="group">
                                <input type="text" placeholder=" " autocomplete="off" name="endereco">
                                <span class="bar"></span>
                                <label>Endereço</label>
                            </div>
                        </div>

                        <div class="form-group mb-2 mx-sm-3">
                            <div class="group">
                                <input type="number" placeholder=" " autocomplete="off" name="numero">
                                <span class="bar"></span>
                                <label>Número</label>
                            </div>
                        </div>

                        <div class="form-group mb-2 mx-sm-3">
                            <div class="group">
                                <input type="text" placeholder=" " autocomplete="off" name="complemento">
                                <span class="bar"></span>
                                <label>Complemento</label>
                            </div>
                        </div>

                        <div class="form-group mb-2 mx-sm-3">
                            <div class="group">
                                <input type="text" placeholder=" " autocomplete="off" name="bairro">
                                <span class="bar"></span>
                                <label>Bairro</label>
                            </div>
                        </div>

                        <div class="form-group mb-2 mx-sm-3">
                            <div class="group">
                                <input type="text" placeholder=" " autocomplete="off" name="cidade">
                                <span class="bar"></span>
                                <label>Cidade</label>
                            </div>
                        </div>

                        <div class="form-group mb-2 mx-sm-3">
                            <div class="group">
                                <input type="text" placeholder=" " autocomplete="off" name="uf">
                                <span class="bar"></span>
                                <label>UF</label>
                            </div>
                        </div>
                        <div id="change-logo" class="form-group">
                            <label> Logo </label>
                            <i class="far fa-image fa-2x "></i>
                    </div>
                    
                    </div>
                    <textarea id="logo64" name="logo" style="display:none"></textarea>
                    <input type="submit" id="send" style="display:none">

                </form>
                <input type="file" style="display:none" id="file-logo" accept="image/x-png,image/jpeg">

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-primary" onclick="$('#send').click()">Salvar</button>
            </div>
        </div>
    </div>
</div>
`
document.querySelector('#company-form1').innerHTML = component
$('#modal-company').modal('show')
$('#modal-company').on('hidden.bs.modal', () => {
    $('#modal-company').remove()
  })
}

export default companyFormContainer