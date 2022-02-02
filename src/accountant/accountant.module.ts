import { Module } from '@nestjs/common';
import { AccountantService } from './accountant.service';
import { AccountantResolver } from './accountant.resolver';

@Module({
  providers: [AccountantResolver, AccountantService]
})
export class AccountantModule {}
