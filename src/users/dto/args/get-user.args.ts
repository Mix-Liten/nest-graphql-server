import { ArgsType, Field } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@ArgsType()
export default class GetUserArgs {
    @Field()
    @IsNotEmpty()
    userId: string;
}
