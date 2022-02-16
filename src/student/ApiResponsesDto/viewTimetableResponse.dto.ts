import { Field, ObjectType } from "@nestjs/graphql";
import { TimetableDto } from "../../commonDto/timetable.dto";

@ObjectType()
export class ViewTimetableResponseDto{

    @Field()
    readonly code : number;

    @Field()
    readonly message : string;

    @Field(type => [TimetableDto] , {nullable : true})
    readonly data : TimetableDto[];
    
}