import { Field, ObjectType } from "@nestjs/graphql";
import { FeesDto } from "../../commonDto/fees.dto";

@ObjectType()
export class UpdateFeeRecordResponseDto{

    @Field()
    readonly code : number;

    @Field()
    readonly message : string;

    @Field({nullable : true})
    readonly data : FeesDto;
    
}