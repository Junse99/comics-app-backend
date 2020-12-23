import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    //Se hacen consultas a base de datos, todo eso
    return 'Hola a todos!';
  }
}
