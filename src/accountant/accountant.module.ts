import { Module } from '@nestjs/common';
import { AccountantService } from './accountant.service';
import { AccountantResolver } from './accountant.resolver';
import { MongooseModule } from '@nestjs/mongoose';

import { Accountant, AccountantSchema } from '../entities/accountant.entity';
import { Fees, FeesSchema } from '../entities/fees.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Accountant.name, schema: AccountantSchema }]),

    MongooseModule.forFeature([
      { name: Fees.name, schema: FeesSchema }]),

  ],
  providers: [AccountantResolver, AccountantService]
})
export class AccountantModule { }
