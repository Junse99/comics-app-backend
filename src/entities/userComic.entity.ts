import { type } from "os";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Comic } from "./comic.entity";
import { User } from "./user.entity";

@Entity('user_comic')//Nombre de la tabla
export class UserComic {

  //ATRIBUTOS DE LA TABLA

  @PrimaryGeneratedColumn({type: 'bigint'})//Convierte en llave primaria y autoincrementable, el tipo bigInt es porque van a haber muchos comics con id, si fueran pocos seria smallInt
  id: Number;

  //Decorador que inserta por defecto una fecha
  @CreateDateColumn({type: 'timestamp'})
  createdAt: Date;


  //RELACIONES
  @ManyToOne(type=> Comic, Comic => Comic.userComics, {onUpdate: 'CASCADE', onDelete: 'CASCADE'})//Hace la relacion
  @JoinColumn({name:'fk_comic'})//Crea la columna con ese nombre
  comic: Comic;

  @ManyToOne(type=> User, User => User.userComics)//Hace la relacion
  @JoinColumn({name:'fk_user'})//Crea la columna
  user: User;

}