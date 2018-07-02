import './manager.css'
import companyFormContainer from "./company-form-container";

const changeLogo = () => {
    document.querySelector('#change-logo').onclick = () => {
        $("#file-logo").click()
        document.querySelector("#file-logo").onchange = ((e) => {
            const img = document.createElement('img')
            resetImage(e.target, (resized, real) => {
                $('#logo64').val(resized.split('data:image/jpeg;base64,')[1])
                img.src = resized
                img.width = '50'
                $('#title-logo').html(img)
            })
        })
    }
}

const companyName = () => {
    $('[name="companyRazao"]').change((e) => {
        if (e.target.value) return $('.modal-title').text(e.target.value)
        $('.modal-title').text('Nova Empresa')
    })
}

const companyForm = async () => {
    companyFormContainer()
    companyName()
    changeLogo()
    setTimeout(() => { $('[name="companyRazao"]').focus() }, 500)

}


export default companyForm