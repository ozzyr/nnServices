import { alerts } from "../modules/alerts";
import axios from "axios"
export const ajax = async (params = {}) => {
    params.withCredentials = true
    try {
        const { data } = await axios[(params.method) ? params.method.toLowerCase() : 'get'](params.url, params.body || params, params)
        return data
    } catch (e) {
        return Promise.reject(e.response) || Promise.reject(e)
        switch(e.response.status){
            case 404 : alerts({message: '<strong>cod 404 :(</strong> <br>Pagina não encontrada! ', type: 'danger'})
            break;
            case 401 : alerts({message: '<strong> :(</strong> <br>Acesso não foi autorizado!', type: 'danger'})
            break;
            default: alerts({message: 'Erro interno do servidor', type: 'danger'})
            break;
        }
    }
}