import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class AccountantDto{
    @Field()
    name: string

    @Field()
    email: string

    @Field()
    password: string

    @Field()
    contactNumber: number

    @Field()
    gender: string

    @Field()
    religion: string

    @Field()
    dob: Date

    @Field()
    age: number

    @Field()
    address: string

    @Field()
    employeeId: string

    @Field()
    salary: number

    @Field()
    joiningDate: Date

    @Field()
    isAccountant: boolean
}