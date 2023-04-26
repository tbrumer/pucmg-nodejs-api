import { Router } from 'express'

let routerV1 = Router()

const endpoint = '/'
const lista_produtos = {
    produtos: [
        { id: 1, descricao: 'Produto 1', valor: 5.00, marca: 'marca ' },
        { id: 2, descricao: 'Produto 2', valor: 5.00, marca: 'marca ' },
        { id: 3, descricao: 'Produto 3', valor: 5.00, marca: 'marca ' },
    ]
}

routerV1.get(endpoint + 'produtos', function (req, res) {
    console.log(req)
    res.status(200).json(lista_produtos)
})

routerV1.get(endpoint + 'produtos/:id', function (req, res) {
    res.status(200).json(lista_produtos.produtos.find(({ id }) => id.toString() === req.params['id']))
})

export default routerV1;
