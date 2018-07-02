import modules from "./modules";

const changeModules = () => {
    $('.menus li').click((e) => {
        const moduleName = $(e.target).data('module')
        if (moduleName) {
            modules[moduleName.toLowerCase()]()
            $(".sidebar").animate({ 'left': '-200px' }, 200)
        }
    })
}

export default changeModules