import './init.css'
import sidebar from './sidebar';

const component = (param = {}) => {
    return `
    <div id="init">
    <nav id="navbar-company" class="navbar fixed-top navbar-expand-lg" style="margin-top:-100px">
        <div class="container-fluid">

            <div title="Menu" id="show-sidebar">
                <i class="fas fa-ellipsis-v"></i>
            </div>

            <div class="content-menus">

            </div>

            <div class="dropdown">
                <i class="far fa-user fa-2x" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>

                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="margin-left:-100px">
                    <a class="dropdown-item log-out" href="#">Sair</a>
                </div>
            </div>
        </div>
    </nav>
    <div id="sidebar"></div>
    <div class="container contents" style="display:none"></div>
</div>
  `
}

export const init = (param = {}) => {
    const html = component()
    document.querySelector("#main").innerHTML = html
    $('.navbar').animate({ "margin-top": '+=100px' }, 500, ()=>{
        document.querySelector('.contents').style.display = 'block'
    })
    sidebar()
    $('body').css({background: '#dddddd'})
}
