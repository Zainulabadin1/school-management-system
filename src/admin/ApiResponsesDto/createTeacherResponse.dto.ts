import { Field, ObjectType } from "@nestjs/graphql";
import { TeacherDto } from "../.././teacher/dto/teacher.dto";

@ObjectType()
export class CreateTeacherResponseDto{

    @Field()
    readonly code : number;

    @Field()
    readonly message : string;

    @Field({nullable : true})
    readonly data : TeacherDto;
    
}