import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty } from "class-validator";

@InputType()
export default class CreateUserInput {
    @Field()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @Field()
    @IsNotEmpty()
    age: number;
}
