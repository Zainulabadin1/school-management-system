import { Field, ObjectType } from "@nestjs/graphql";
import { ExpensesDto } from "../../commonDto/expenses.dto";

@ObjectType()
export class UpdateExpensesResponseDto {

    @Field()
    readonly code: number;

    @Field()
    readonly message: string;

    @Field({ nullable: true })
    readonly data: ExpensesDto;

}