import './empresas.css'
import companyForm from './company-form';
import companyContainer from './company-container'

const newCompany = () => {
    document.querySelector('#add-company').onclick = () => {
        companyForm()
    }
}

const empresas = () => {
     document.querySelector(".contents").innerHTML = companyContainer()
    $(".content-empresas").show('fast')
    newCompany()
}

export default empresas