import { Field, ObjectType } from "@nestjs/graphql";
import { SubjectDto } from "../.././commonDto/subject.dto";

@ObjectType()
export class UpdateSubjectResponseDto{

    @Field()
    readonly code : number;

    @Field()
    readonly message : string;

    @Field({nullable : true})
    readonly data : SubjectDto;
    
}