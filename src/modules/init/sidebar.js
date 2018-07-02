import login from "../login";
import changeModules from './change-modules';

const logOut = () => {
    $(".log-out").click(() => {
        $(".sidebar").animate({ 'left': '-200px' }, 200)
        $('#navbar-company').animate({ "margin-top": '-=100px' }, 200, () => {
            $('.contents').remove()
            $('#init').remove()
            login()
        })
    })
}

const showSidebar = () => {
    document.querySelector('#show-sidebar').onclick = () => {
        if ($(".sidebar").offset().left === 0) {
            document.querySelector('html').onclick = null
            return $(".sidebar").animate({ 'left': '-200px' }, 200)
        }
        $(".sidebar").animate({ 'left': '0px' }, 200)
        document.querySelector('html').onclick = ((e) => {
            if (e.pageX > $(".sidebar").width() || e.pageY > $(".sidebar").height()) {
                $(".sidebar").animate({ 'left': '-200px' }, 200)
                document.querySelector('html').onclick = null
            }
        })
    }
}


const closeSidebar = () => {
    $(".close-sidebar").click(() => {
        $(".sidebar").animate({ 'left': '-200px' }, 200)
    })
}

const changeModulesApi = async () => {
    const { data } = await ajax({ url: 'modules' })
    let html = ''
    data.forEach(modules => {
        html += `<li data-module="${modules.name}"><div class="space">${modules.icon}</div> ${modules.name}</li>
        
        `
    });
    $('.menus').append(html)
    $('.menus').append(`<li class="log-out"> <div class="space" ><i class="fas fa-sign-out-alt"></i></div> Sair</li>`)
    changeModules()
    logOut()
}

const sidebar = (params = []) => {
    const component = `<div class="sidebar">
    <div style="position:absolute; top:0; right:10px; padding:10px" class="close-sidebar">
        <i class="fas fa-times"></i>
    </div>
    <ul class="navbar-nav menus">
    </ul>
</div>`
    document.querySelector('#sidebar').innerHTML = component
    showSidebar()
    changeModulesApi()
    closeSidebar()    
}

export default sidebar