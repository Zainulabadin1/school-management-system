import { Field, ObjectType } from "@nestjs/graphql";
import { PaperDto } from "../.././commonDto/papers.dto";

@ObjectType()
export class PaperMarksResponseDto{

    @Field()
    code : number;

    @Field()
    message : string;

    @Field({nullable : true})
    data : PaperDto;
    
}