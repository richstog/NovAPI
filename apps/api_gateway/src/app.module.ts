import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TimetableModule } from './timetable/timetable.module';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    
    
    AuthModule,
    TimetableModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
