import { Field, ObjectType } from "@nestjs/graphql";
import { AssignmentDto } from "../../commonDto/assignment.dto";

@ObjectType()
export class UpdateAssignmentMarksResponseDto{

    @Field()
    code : number;

    @Field()
    message : string;

    @Field({nullable : true})
    data : AssignmentDto;
    
}