import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  //Reciben las peticiones y me dan la respuesta
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get("/2")
  getHello2(): string {
    return this.appService.getHello() + '2';
  }

  @Put()
  putHello(): string {
    return "Put Hello";
  }

  @Post()
  postHello(): string {
    return "Post Hello";
  }

  @Delete()
  deleteHello(): string {
    return "Delete Hello";
  }
}
