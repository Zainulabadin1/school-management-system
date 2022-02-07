import { Field, ObjectType } from "@nestjs/graphql";
import { ParentDto } from "../.././parent/dto/parent.dto";

@ObjectType()
export class UpdateParentResponseDto{

    @Field()
    readonly code : number;

    @Field()
    readonly message : string;

    @Field({nullable : true})
    readonly data : ParentDto;
    
}