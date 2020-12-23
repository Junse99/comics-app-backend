import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserComic } from "./userComic.entity";

@Entity('comic')//Nombre de la tabla
export class Comic {

  //ATRIBUTOS DE LA TABLA

  @PrimaryGeneratedColumn({type: 'bigint'})//Convierte en llave primaria y autoincrementable, el tipo bigInt es porque van a haber muchos comics con id, si fueran pocos seria smallInt
  id: Number;

  @Column('character varying', {unique: true})
  title: String;

  @Column('text')
  description: String;

  @Column('character varying', {name:'image_url', length: 300})
  imageUrl: String;

  //Relacion de muchos a muchos
  @OneToMany(type => UserComic, UserComic => UserComic.comic)
  userComics: UserComic[];
}