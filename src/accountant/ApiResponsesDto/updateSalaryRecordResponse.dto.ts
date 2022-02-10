import { Field, ObjectType } from "@nestjs/graphql";
import { SalaryDto } from "../../commonDto/salary.dto";

@ObjectType()
export class UpdateSalaryRecordResponseDto{

    @Field()
    readonly code : number;

    @Field()
    readonly message : string;

    @Field({nullable : true})
    readonly data : SalaryDto;
    
}