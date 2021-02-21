import { ArgsType, Field } from "@nestjs/graphql";
import { IsArray } from "class-validator";

@ArgsType()
export default class GetUsersArgs {
    @Field(() => [String])
    @IsArray()
    userIds: string[];
}
