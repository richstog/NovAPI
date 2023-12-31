import { Module } from '@nestjs/common';
import { TimetableService } from './timetable.service';
import { TimetableController } from './timetable.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'TIMETABLE_MICROSERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'timetable',
            brokers: ['localhost:9092']
          },
          //producerOnlyMode: true,
          consumer: {
            groupId: 'timetable_consumer'
          }
        }
      }
    ]),
  ],
  providers: [TimetableService],
  controllers: [TimetableController],
  exports: [
    TimetableService
  ]
})
export class TimetableModule {}
