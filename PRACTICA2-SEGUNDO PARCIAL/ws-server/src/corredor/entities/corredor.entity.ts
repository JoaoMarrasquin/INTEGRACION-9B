import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Corredor {
    @PrimaryGeneratedColumn('uuid')
    id:string;
    
    @Column('varchar',{unique:true})
    nombre:string;

    @Column('text', {nullable:true})
    peso:string;

    @Column('text',{nullable:true})
    altura:string;

    @Column('text',{nullable:true})
    edad:string;

    @Column('boolean', {default:true})
    estado:boolean;
}
