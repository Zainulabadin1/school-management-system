import { Field, ObjectType } from "@nestjs/graphql";
import { StuAttendanceDto } from "../../commonDto/stuAttendance.dto";

@ObjectType()
export class ViewAttendanceResponseDto {

    @Field()
    readonly code: number;

    @Field()
    readonly message: string;

    @Field(type => [StuAttendanceDto], { nullable: true })
    readonly data: StuAttendanceDto[];

}