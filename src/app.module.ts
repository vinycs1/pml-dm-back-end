import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnwsersModule } from './anwsers/anwsers.module';

@Module({
  imports: [ AnwsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
