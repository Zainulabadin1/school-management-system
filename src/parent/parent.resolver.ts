import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ParentService } from './parent.service';
import { Parent } from '../entities/parent.entity';

import { LoginParentInput } from './inputs/login-parent.input';

import { loginParentResponseDto } from './ApiResponseDto/loginParentResponse.dto';


@Resolver()
export class ParentResolver {
  constructor(private readonly parentService: ParentService) {}

  @Mutation(()=> loginParentResponseDto)
  loginParent(@Args('loginParentInput') loginParentInput: LoginParentInput){
    return this.parentService.loginParent(loginParentInput);
  }

  
}
