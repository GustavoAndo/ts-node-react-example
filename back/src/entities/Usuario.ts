import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity('usuarios')
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    email: string

    @Column({type: "decimal", precision: 10, scale: 2, default: 0})
    dinheiro: number

    @Column({name: "nro_jogos"})
    nroJogos: number

}