import { Field, ObjectType } from "@nestjs/graphql";
import { FeesDto } from "../../commonDto/fees.dto";

@ObjectType()
export class ViewFeeRecordResponseDto{

    @Field()
    readonly code : number;

    @Field()
    readonly message : string;

    @Field(type => [FeesDto] , {nullable : true})
    readonly data : FeesDto[];
    
}