import { NextFunction, Request, Response } from 'express'
import { usuarioRepository } from '../repositories/UsuarioRepository'
import jwt from 'jsonwebtoken'

type JwtPayload = {
	id: number
}

export const authMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
    const { authorization } = req.headers

    if (!authorization) {
        return res.json({message: "Autorização negada!"})
    }

    const token = authorization.split(' ')[1]

    const { id } = jwt.verify(token,  process.env.JWT_PASS ?? '') as JwtPayload

    const usuario: any = await usuarioRepository.findOneBy({ id })
 
    if (!usuario) {
        return res.json({message: "Internal Server Error"})
    }

    const { senha: _, ...usuarioLogado } = usuario

    req.user = usuarioLogado

	next()
}