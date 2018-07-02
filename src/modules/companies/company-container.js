const companyContainer = () => {
    return `<div class="content-empresas" style="display:none">
    <nav class="navbar navbar-expand-lg navbar-company">
        <div class="container-fluid">
           <div > <h5>Empresas</h5> </div>
           <div > </div>
          
             <div class="col-md-5">
                    <div class="input-group search-company">
                        <i class="fas fa-search search-company-loop"></i>
                        <input type="text" class="form-control seach-company input-seach-company" placeholder="Procurar Empresa">
                        <div class="input-group-prepend" >
                            <div class="input-group-text" id="add-company" title="Adicionar Empresas" >
                                <i class="fas fa-plus" ></i>
                            </div>
                        </div>
                </div>
                </div>
           
        </div>
    </nav>

    <table class="table table-dark table-hover">
        <thead>
            <tr>
                <th scope="col">Empresa</th>
                <th scope="col">C.N.P.J.</th>
                <th scope="col">I.E.</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
        </tbody>
    </table>
    <div id="company-form1"></div>
</div>
`
}

export default companyContainer