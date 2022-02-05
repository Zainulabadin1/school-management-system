import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { TeacherModule } from './teacher/teacher.module';
import { StudentModule } from './student/student.module';
import { AccountantModule } from './accountant/accountant.module';
import { ParentModule } from './parent/parent.module';

import { Admin, AdminSchema } from './entities/admin.entity';

@Module({
  imports: [AdminModule, 
            TeacherModule, 
            StudentModule, 
            AccountantModule, 
            ParentModule,
            GraphQLModule.forRoot({
              autoSchemaFile: 'schema.gql',
              introspection: true,
                playground: true
            }),
            MongooseModule.forRoot('mongodb+srv://zain9246:G9JVMPYMhQErVbh6@cluster0.32ag5.mongodb.net/school-management-system'),
            MongooseModule.forFeature([{
              name: Admin.name, schema: AdminSchema
            }]),
          ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
