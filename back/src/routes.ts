import { Router } from 'express'
import UsuarioController from './controllers/UsuarioController'
import { authMiddleware } from './middlewares/authMiddleware'

const routes = Router()

routes.post("/cadastrarUsuario", new UsuarioController().create)
routes.get("/usuarios", new UsuarioController().read)
routes.put("/atualizarUsuario/:id", new UsuarioController().update)
routes.delete("/excluirUsuario/:id", new UsuarioController().delete)
routes.post("/login", new UsuarioController().login)

routes.get("/getProfile", authMiddleware, new UsuarioController().getProfile)

export default routes