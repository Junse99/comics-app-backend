import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { ComicService } from './comic.service';

@Controller('comic')
export class ComicController {

  constructor(private readonly comicService: ComicService){}

  @Get('/all')
  async getAllComic(){
    return await this.comicService.getAllComic()
  }

  @Get('/id/:id')
  async getComicId(@Param('id') id:Number){
    return await this.comicService.getComicId(id)
  }

  @Post()
  async createComic(@Body() body){
    return await this.comicService.createComic(body)
  }

  //Todo viene en el Req, los Param, Body y lo otro
  @Put('/:id')
  async updateComic(@Req() req, @Param('id') id:Number){
    return await this.comicService.updateComic(id)
  }

  @Delete('/:id')
  async deleteComic(@Param('id') id:Number){
    return await this.comicService.deleteComic(id)
  }
}
