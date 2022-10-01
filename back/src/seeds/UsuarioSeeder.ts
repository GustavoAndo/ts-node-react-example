import { DataSource } from "typeorm"
import { Seeder, SeederFactoryManager } from "typeorm-extension"
import { Usuario } from "../entities/Usuario"
import { Perfil } from "../entities/Usuario"
import bcrypt from "bcrypt"

export class UsuarioSeeder implements Seeder {
    async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<void> {
        const usuarioRepository = dataSource.getRepository(Usuario)

        const perfil: Perfil = 'administrador'
        const usuario = {
            nome: "Admin",
            email: "admin@admin.com",
            senha: await bcrypt.hash('123', 10),
            nroJogos: 0,
            perfil: perfil
        }
        
		const usuarioExists = await usuarioRepository.findOneBy({ email: usuario.email })

		if (!usuarioExists) {
            const novoUsuario = usuarioRepository.create(usuario)
            await usuarioRepository.save(novoUsuario)
		}

    }
    
}