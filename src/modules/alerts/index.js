import './index.css'
export const alerts = (params = {}) => {

    const html = `<div id="alerts" class="alert alert-${params.type || 'warning'} alert-dismissible fade show" role="alert">
   <button type="button" class="close">
      <span aria-hidden="true">&times;</span>
    </button><br>${params.message}
  </div>`
    $("#alerts").remove()
    $('body').append(html)
    $("#alerts").animate({ right: '+=320px' }, 200)
    $(".close").click(() => {
      $("#alerts").animate({ right: '-=320px' }, 200, () => $("#alerts").remove())
    })
    let timeout = setTimeout(() => $(".close").click(), 3000)
    $("#alerts").mousemove(() => {
      clearTimeout(timeout)
    })
    $("#alerts").mouseout(() => {
      timeout = setTimeout(() => $(".close").click(), 3000)
    })
  }