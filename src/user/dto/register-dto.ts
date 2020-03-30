import { IsEmail, IsNotEmpty } from "class-validator";

/**
 * Dto for register user in system
 */
export class RegisterDto {
    email: string;

    password: string;
}