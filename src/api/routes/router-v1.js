import { Router } from 'express'

import { produtos } from '../../database'

let routerV1 = Router()

const endpoint = '/'

routerV1.get(endpoint + 'produtos', function (_req, res) {
    res.status(200).json(produtos)
})

routerV1.get(endpoint + 'produtos/:id', function (req, res) {
    res.status(200).json(produtos.find(({ id }) => id.toString() === req.params['id']))
})

routerV1.post(endpoint + 'produtos/', function (req, res) {
    produtos.push({
        id: produtos.length++,
        descricao: req.body['descricao'],
        valor: req.body['valor'],
        marca: req.body['marca']
    })
    res.status(200).json("Produto adicionado com sucesso!")
})

export default routerV1;
