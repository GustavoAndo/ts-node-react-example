import { Request, Response } from "express"
import { usuarioRepository } from "../repositories/UsuarioRepository"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

type JwtPayload = {
    id: number
}

export default class UsuarioController {

    async create(req: Request, res: Response) {
        const { nome, email, dinheiro, nro_jogos, senha } = req.body

        if (!nome) {
            return res.json({message: "O campo nome é obrigatório!"})
        }
        if (!email) {
            return res.json({message: "O campo nome é obrigatório!"})
        }
        if (!senha) {
            return res.json({message: "O campo nome é obrigatório!"})
        }

        const usuarioExist = await usuarioRepository.query(`
            SELECT * FROM usuarios WHERE email = $1
        `, [email])
        if (usuarioExist.length != 0) {
            return res.json({message: "Email já cadastrado"})
        } 

        const hashSenha = await bcrypt.hash(senha, 10)

        try {
            const novoUsuario = await usuarioRepository.query(`
                INSERT INTO usuarios (nome, email, dinheiro, nro_jogos, senha) VALUES ($1, $2, $3 ,$4, $5)
            `, [nome, email, dinheiro, nro_jogos, hashSenha])

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

    async login(req: Request, res: Response) {
        const { email, senha } = req.body;
      
        const usuario: any = await usuarioRepository.findOneBy({ email })

        if (!usuario) {
            res.json({message: "Email inválido!"})
        }

        const verificarSenha = await bcrypt.compare(senha, usuario.senha)
    
        if (!verificarSenha){
            res.json({message: "Senha inválida!"})
        }

        const token = jwt.sign({ id: usuario.id }, process.env.JWT_PASS ?? '', {expiresIn: "8h"})

        console.log(token)
    }   

    async getProfile(req: Request, res: Response) {
        return res.json(req.user)
    }
}
