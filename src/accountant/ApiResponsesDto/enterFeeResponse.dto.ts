import { Field, ObjectType } from "@nestjs/graphql";
import { FeesDto } from "../../commonDto/fees.dto";

@ObjectType()
export class EnterFeeResponseDto{

    @Field()
    readonly code : number;

    @Field()
    readonly message : string;

    @Field({nullable : true})
    readonly data : FeesDto;
    
}