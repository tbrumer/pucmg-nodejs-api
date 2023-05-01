import { Router } from 'express'

import { produtos } from '../../static/database'

const routerV1 = Router()
const endpoint = '/v1/'

let id = Math.max(...produtos.map(p => p.id))

routerV1.get(endpoint + 'produtos', (_req, res) => {
    res.status(200).json(produtos)
})

routerV1.get(endpoint + 'produtos/:id', (req, res) => {
    res.status(200).json(getProductById(req.params.id))
})

routerV1.post(endpoint + 'produtos', (req, res) => {
    const product = {
        id: ++id,
        descricao: req.body.descricao,
        valor: req.body.valor,
        marca: req.body.marca
    }
    produtos.push(product)

    res.status(201).json(product)
})

routerV1.put(endpoint + 'produtos/:id', (req, res) => {
    const product = getProductById(req.params.id)

    if (product) {
        product.descricao = req.body.descricao || product.descricao
        product.valor = req.body.valor || product.valor
        product.marca = req.body.marca || product.marca
    }

    res.status(200).json(product)
})

routerV1.delete(endpoint + 'produtos/:id', (req, res) => {
    const index = getProductIndexById(req.params.id)

    if (index >= 0) {
        produtos.splice(getProductIndexById(req.params.id), 1)
    }

    res.status(204).end()
})

function getProductById(productId) {
    return produtos.find(({ id }) => id === parseInt(productId))
}

function getProductIndexById(productId) {
    return produtos.findIndex(({ id }) => id === parseInt(productId))
}

export default routerV1;
