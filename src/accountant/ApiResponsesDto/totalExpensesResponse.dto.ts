import { Field, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class totalExpensesResponseDto {

    @Field()
    readonly code: number;

    @Field()
    readonly message: string;

    @Field({ nullable: true })
    readonly totalExpenses: number;

}