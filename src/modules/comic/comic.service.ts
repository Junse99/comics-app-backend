import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comic } from '../../entities/comic.entity';

@Injectable()
export class ComicService {

  constructor (
    @InjectRepository(Comic) private readonly comicRepository: Repository<Comic>
  ){ }

  async getAllComic(){
    return await this.comicRepository.find()
  }

  async getComicId(id){
    return await this.comicRepository.findOne(id)
  }

  async createComic(body){

    const res = await this.comicRepository.save(body)
    console.log('RES', res)
    return res;
/*     console.log("BODY", body)
    return "Creado correctamente" */
  }

  //Todo viene en el Req, los Param, Body y lo otro
  async updateComic(id:Number){
    return "Actualizado correctamente" + id
  }

  async deleteComic(id:Number){
    return "Borrado correctamente" + id
  }
}
