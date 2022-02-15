import { Field, ObjectType } from "@nestjs/graphql";
import { QuizzesDto } from "../../commonDto/quizzes.dto";

@ObjectType()
export class UpdateQuizMarksResponseDto{

    @Field()
    code : number;

    @Field()
    message : string;

    @Field({nullable : true})
    data : QuizzesDto;
    
}