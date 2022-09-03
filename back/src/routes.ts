import { Router } from 'express'
import UsuarioController from './controllers/UsuarioController'

const routes = Router()

routes.post("/cadastrarUsuario", new UsuarioController().create)

export default routes