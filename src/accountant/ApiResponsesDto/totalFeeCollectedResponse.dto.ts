import { Field, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class totalFeeCollectedResponseDto {

    @Field()
    readonly code: number;

    @Field()
    readonly message: string;

    @Field({ nullable: true })
    readonly totalFeePaid: number;

}