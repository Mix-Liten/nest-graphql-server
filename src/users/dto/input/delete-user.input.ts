import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export default class DeleteUserInput {
    @Field()
    @IsNotEmpty()
    userId: string;
}
