import { Field, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class totalSalariesResponseDto {

    @Field()
    readonly code: number;

    @Field()
    readonly message: string;

    @Field({ nullable: true })
    readonly totalSalariesPaid: number;

}