import { Router } from 'express'
import UsuarioController from './controllers/UsuarioController'

const routes = Router()

routes.post("/cadastrarUsuario", new UsuarioController().create)
routes.get("/usuarios", new UsuarioController().read)
routes.put("/atualizarUsuario/:id", new UsuarioController().update)

export default routes