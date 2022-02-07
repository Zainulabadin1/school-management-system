import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateTeacherInput {
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

    @Field({nullable: true})
    age: number

    @Field()
    address: string

    @Field()
    employeeId: string

    @Field()
    salary: number

    @Field({nullable : true})
    joiningDate: Date

    @Field({nullable : true})
    isTeacher: boolean
}
