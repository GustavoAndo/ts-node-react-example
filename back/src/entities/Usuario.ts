import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

export type Perfil = 'administrador' | 'gestor' | 'colaborador'

@Entity('usuarios')
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column({unique: true})
    email: string

    @Column({type: "text"})
    senha: string

    @Column({type: "decimal", precision: 10, scale: 2, default: 0})
    dinheiro: number

    @Column({name: "nro_jogos"})
    nroJogos: number

    @Column({type: "enum", enum:['administrador', 'gestor', 'colaborador'], default: 'colaborador', nullable: false})
    perfil: Perfil
}