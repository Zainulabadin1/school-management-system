import { Field, ObjectType } from "@nestjs/graphql";
import { AccountantDto } from "../.././accountant/dto/accountant.dto";

@ObjectType()
export class UpdateAccountantResponseDto{

    @Field()
    readonly code : number;

    @Field()
    readonly message : string;

    @Field({nullable : true})
    readonly data : AccountantDto;
    
}