import { Router } from 'express'

const routerV2 = Router()
const endpoint = '/v2/'

const knex = require('knex')({
    client: 'pg',
    connection: process.env.DATABASE_URL
})

routerV2.get(endpoint + 'cursos', (_req, res) => {
    knex.select('*')
        .from('curso')
        .then(cursos => {
            if (cursos && cursos.length)
                res.status(200).json(cursos)
            else
                res.status(400).json({ message: "Nenhum curso cadastrado :(" })
        })
        .catch(err => {
            res.status(500).json({ message: 'Erro ao recuperar os cursos - ' + err.message })
        })
})

routerV2.get(endpoint + 'cursos/:id', (req, res) => {
    knex.select('*')
        .from('curso')
        .where('id', req.params.id)
        .first()
        .then(curso => {
            if (curso)
                res.status(200).json(curso)
            else
                res.status(404).json({ message: "Nenhum curso cadastrado com o ID informado :(" })
        })
        .catch(err => {
            res.status(500).json({ message: 'Erro ao recuperar curso - ' + err.message })
        })
})

routerV2.post(endpoint + 'cursos', (req, res) => {
    knex('curso')
        .insert({
            descricao: req.body.descricao,
            valor: req.body.valor,
            marca: req.body.marca
        }, ['*'])
        .then(curso => { res.status(200).json(curso) })
        .catch(err => {
            res.status(500).json({ message: 'Erro ao cadastrar curso - ' + err.message })
        })
})

routerV2.put(endpoint + 'cursos/:id', (req, res) => {
    knex('curso')
        .where('id', req.params.id)
        .update({
            descricao: req.body.descricao,
            valor: req.body.valor,
            marca: req.body.marca
        }, ['*'])
        .then(cursos => {
            if (cursos && cursos.length)
                res.status(200).json(cursos)
            else
                res.status(404).json({ message: "Nenhum curso cadastrado com o ID informado :(" })
        })
        .catch(err => {
            res.status(500).json({ message: 'Erro ao atualizar curso - ' + err.message })
        })
})

routerV2.delete(endpoint + 'cursos/:id', (req, res) => {
    knex('curso')
        .where('id', req.params.id)
        .del()
        .then(result => {
            if (result)
                res.status(204).end()
            else
                res.status(404).json({ message: "Nenhum curso cadastrado com o ID informado :(" })
        })
        .catch(err => {
            res.status(500).json({ message: 'Erro ao remover curso - ' + err.message })
        })
})

export default routerV2;
