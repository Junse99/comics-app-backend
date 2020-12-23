import { type } from "os";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserComic } from "./userComic.entity";

@Entity('user')//Nombre de la tabla
export class User {

  //ATRIBUTOS DE LA TABLA

  @PrimaryGeneratedColumn({type: 'bigint'})//Convierte en llave primaria y autoincrementable, el tipo bigInt es porque van a haber muchos comics con id, si fueran pocos seria smallInt
  id: Number;

  @Column('character varying')
  email: String;

  @Column('character varying')
  password: String;

  //Relacion de muchos a muchos
  @ManyToOne(type => UserComic, UserComic => UserComic.user)
  userComics: UserComic[];
}