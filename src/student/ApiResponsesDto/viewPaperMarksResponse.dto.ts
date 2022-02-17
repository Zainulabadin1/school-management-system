import { Field, ObjectType } from "@nestjs/graphql";
import { PaperDto } from "../../commonDto/papers.dto";

@ObjectType()
export class ViewPaperMarksResponseDto {

    @Field()
    readonly code: number;

    @Field()
    readonly message: string;

    @Field(type => [PaperDto], { nullable: true })
    readonly data: PaperDto[];

}