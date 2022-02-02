import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { TeacherModule } from './teacher/teacher.module';
import { StudentModule } from './student/student.module';

@Module({
  imports: [AdminModule, TeacherModule, StudentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
