import { Field, ObjectType } from "@nestjs/graphql";
import { QuizzesDto } from "../../commonDto/quizzes.dto";

@ObjectType()
export class ViewQuizzesMarksResponseDto{

    @Field()
    readonly code : number;

    @Field()
    readonly message : string;

    @Field(type => [QuizzesDto] , {nullable : true})
    readonly data : QuizzesDto[];
    
}