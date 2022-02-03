import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { TeacherModule } from './teacher/teacher.module';
import { StudentModule } from './student/student.module';
import { AccountantModule } from './accountant/accountant.module';
import { ParentModule } from './parent/parent.module';
import { ParentModule } from './parent/parent.module';

@Module({
  imports: [AdminModule, TeacherModule, StudentModule, AccountantModule, ParentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
