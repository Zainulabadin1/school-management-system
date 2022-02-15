import { Field, ObjectType } from "@nestjs/graphql";
import { AssignmentDto } from "../../commonDto/assignment.dto";

@ObjectType()
export class AssignmentMarksResponseDto{

    @Field()
    code : number;

    @Field()
    message : string;

    @Field({nullable : true})
    data : AssignmentDto;
    
}