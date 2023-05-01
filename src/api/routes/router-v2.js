import { Router } from 'express'
import { produtos } from '../../static/database'

const routerV2 = Router()
const endpoint = '/v2/'

const knex = require('knex')({
    client: 'pg',
    connection: process.env.DATABASE_URL
})

routerV2.get(endpoint + 'produtos', (_req, res) => {
    knex.select('*')
        .from('produto')
        .then(produtos => {
            if (produtos && produtos.length)
                res.status(200).json(produtos)
            else
                res.status(400).json({ message: "Nenhum produto cadastrado :(" })
        })
        .catch(err => {
            res.status(500).json({ message: 'Erro ao recuperar produtos - ' + err.message })
        })
})

routerV2.get(endpoint + 'produtos/:id', (req, res) => {
    knex.select('*')
        .from('produto')
        .where('id', req.params.id)
        .first()
        .then(produto => {
            if (produto)
                res.status(200).json(produto)
            else
                res.status(404).json({ message: "Nenhum produto cadastrado com o ID informado :(" })
        })
        .catch(err => {
            res.status(500).json({ message: 'Erro ao recuperar produto - ' + err.message })
        })
})

routerV2.post(endpoint + 'produtos', (req, res) => {
    knex('produto')
        .insert({
            descricao: req.body.descricao,
            valor: req.body.valor,
            marca: req.body.marca
        }, ['*'])
        .then(produto => { res.status(200).json(produto) })
        .catch(err => {
            res.status(500).json({ message: 'Erro ao cadastrar produto - ' + err.message })
        })
})

routerV2.put(endpoint + 'produtos/:id', (req, res) => {
    knex('produto')
        .where('id', req.params.id)
        .update({
            descricao: req.body.descricao,
            valor: req.body.valor,
            marca: req.body.marca
        }, ['*'])
        .then(produtos => {
            if (produtos && produtos.length)
                res.status(200).json(produtos)
            else
                res.status(404).json({ message: "Nenhum produto cadastrado com o ID informado :(" })
        })
        .catch(err => {
            res.status(500).json({ message: 'Erro ao atualizar produto - ' + err.message })
        })
})

routerV2.delete(endpoint + 'produtos/:id', (req, res) => {
    knex('produto')
        .where('id', req.params.id)
        .del()
        .then(result => {
            if (result)
                res.status(204).end()
            else
                res.status(404).json({ message: "Nenhum produto cadastrado com o ID informado :(" })
        })
        .catch(err => {
            res.status(500).json({ message: 'Erro ao remover produto - ' + err.message })
        })
})

export default routerV2;
