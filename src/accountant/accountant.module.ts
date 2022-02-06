import { Module } from '@nestjs/common';
import { AccountantService } from './accountant.service';
import { AccountantResolver } from './accountant.resolver';
import { MongooseModule } from '@nestjs/mongoose';

import { Accountant, AccountantSchema } from '../entities/accountant.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Accountant.name, schema: AccountantSchema }]),
      
  ],
  providers: [AccountantResolver, AccountantService]
})
export class AccountantModule {}
