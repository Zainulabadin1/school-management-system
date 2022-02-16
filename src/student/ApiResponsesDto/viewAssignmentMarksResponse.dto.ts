import { Field, ObjectType } from "@nestjs/graphql";
import { AssignmentDto } from "../../commonDto/assignment.dto";

@ObjectType()
export class ViewAssignmentMarksResponseDto{

    @Field()
    readonly code : number;

    @Field()
    readonly message : string;

    @Field(type => [AssignmentDto] , {nullable : true})
    readonly data : AssignmentDto[];
    
}