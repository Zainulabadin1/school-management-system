import { Field, ObjectType } from "@nestjs/graphql";
import { StuAttendanceDto } from "../../commonDto/stuAttendance.dto";

@ObjectType()
export class MarkStudentAttendanceResponseDto{

    @Field()
    code : number;

    @Field()
    message : string;

    @Field({nullable : true})
    data : StuAttendanceDto;
    
}