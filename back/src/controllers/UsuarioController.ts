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

}