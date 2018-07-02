const host = '127.0.0.1'
const config = {
    /**config for backoffice database connection */
    igvBank: {
        client: 'mysql',
        connection: {
            host,//'172.16.0.179',//'192.168.1.117',//host: '172.16.0.192',
            user: 'root',
            password: '',
            database: 'igvbank'
        }
    },
    session: 20//tempo de expiração da sessão
}

module.exports = config