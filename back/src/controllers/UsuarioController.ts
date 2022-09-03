import { Request, Response } from "express";
import { usuarioRepository } from "../repositories/UsuarioRepository";

export default class UsuarioController {
    async create(req: Request, res: Response) {
        const { nome, email, dinheiro, nro_jogos } = req.body

        if (!nome) {
            return res.json({message: "O campo nome é obrigatório!"})
        }
        if (!email) {
            return res.json({message: "O campo nome é obrigatório!"})
        }

        try {
            const novoUsuario = await usuarioRepository.query(`
                INSERT INTO usuarios (nome, email, dinheiro, nro_jogos) VALUES ($1, $2, $3 ,$4)
            `, [nome, email, dinheiro, nro_jogos])

            return res.json({message: "Usuário Cadastrado!"})
        } catch (error) {
            console.log(error)
            return res.json({message: "Internal Server Error"})
        }
    }

    async read(req: Request, res: Response) {
        try {
            const usuarios = await usuarioRepository.query(`
                SELECT * FROM usuarios
            `)

            return res.json(usuarios)
        } catch (error) {
            console.log(error)
            return res.json({message: "Internal Server Error"})
        }
    }

    async update(req: Request, res: Response) {
        const { nome, email, dinheiro, nro_jogos } = req.body
        const { id } = req.params

        try {
            const atualizarUsuario = await usuarioRepository.query(`
                UPDATE usuarios SET nome=$1, email=$2, dinheiro=$3, nro_jogos=$4 WHERE id=$5
            `, [nome, email, dinheiro, nro_jogos, id])

            return res.json({message: "Atualizado com sucesso!"})
        } catch (error) {
            console.log(error)
            return res.json({message: "Internal Server Error"})
        }
    }
    
    async delete(req: Request, res: Response) {
        const { id } = req.params

        try {
            const excluirUsuario = await usuarioRepository.query(`
                DELETE FROM usuarios WHERE id=$1
            `, [id])

            return res.json({message: "Excluído com sucesso!"})
        } catch (error) {
            console.log(error)
            return res.json({message: "Internal Server Error"})
        }
    }

}