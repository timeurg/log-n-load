import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('hello ' + new Date());
    return '<red>Hello World!!!!112</red>'
     + '<br><strong>Hello World!!!!234</strong>';
  }
}
