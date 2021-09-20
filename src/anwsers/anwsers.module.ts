import { Module } from '@nestjs/common';
import { AnwsersService } from './anwsers.service';
import { AnwsersController } from './anwsers.controller';

@Module({
  controllers: [AnwsersController],
  providers: [AnwsersService]
})
export class AnwsersModule {}
