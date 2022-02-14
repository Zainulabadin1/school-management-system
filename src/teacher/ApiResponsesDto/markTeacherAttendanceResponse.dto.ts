import { Field, ObjectType } from "@nestjs/graphql";
import { TeacherAttendanceDto } from "../../commonDto/teacherAttendance.dto";

@ObjectType()
export class MarkTeacherAttendanceResponseDto{

    @Field()
    code : number;

    @Field()
    message : string;

    @Field({nullable : true})
    data : TeacherAttendanceDto;
    
}