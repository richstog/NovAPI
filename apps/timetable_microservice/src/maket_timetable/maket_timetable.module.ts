import { Module, forwardRef } from '@nestjs/common';
import { MaketTimetableController } from './maket_timetable.controller';
import { MaketTimetableService } from './maket_timetable.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { MaketTimetable } from './maket_timetable.model';
import { TimetableMicroserviceModule } from '../timetable_microservice.module';

@Module({
  imports: [
    SequelizeModule.forFeature([MaketTimetable]),
    forwardRef(() => TimetableMicroserviceModule),
  ],
  controllers: [MaketTimetableController],
  providers: [MaketTimetableService]
})
export class MaketTimetableModule {}
