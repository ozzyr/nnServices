const model = {
    post: async (params = {}) => {
        const data = await knex('users').select('id', 'senha').where(params).limit(1)
        return data
    },
    geraToken: async (params = {}) => {
        const data = await knex('tokens').select('usuarioId').where({usuarioId: params.usuarioId})
        if(!data.length){
            const insert = await knex('tokens').insert(params)
            return insert
        }
        const update = await knex('tokens').update(params).where({usuarioId: params.usuarioId})
        return update;
    }
}

module.exports = model