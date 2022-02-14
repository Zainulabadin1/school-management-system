import { Field, ObjectType } from "@nestjs/graphql";
import { TeacherAttendanceDto } from "../../commonDto/teacherAttendance.dto";

@ObjectType()
export class ViewTeacherAttendanceResponseDto{

    @Field()
    readonly code : number;

    @Field()
    readonly message : string;

    @Field(type => [TeacherAttendanceDto] , {nullable : true})
    readonly data : TeacherAttendanceDto[];
    
}