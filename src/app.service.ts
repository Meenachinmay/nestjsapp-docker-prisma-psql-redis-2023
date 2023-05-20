import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! Chinmay anand.';
  }

  getMyName(): string {
    return 'Chinmay anand';
  }
}
