import { Field, ObjectType } from "@nestjs/graphql";
import { AdminDto } from "../dto/admin.dto";

@ObjectType()
export class CreateAdminResponseDto{

    @Field()
    readonly code : number;

    @Field()
    readonly message : string;

    @Field({nullable : true})
    readonly data : AdminDto;
    
}