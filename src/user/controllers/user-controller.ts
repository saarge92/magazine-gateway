import { Controller, Post, Body, HttpCode, HttpStatus } from "@nestjs/common";
import { UserService } from "../service/user-service";
import { RegisterDto } from "../dto/register-dto";
import { IUserResponse } from "../dto/interfaces/IUserResponse-interface";
import { Observable } from "rxjs";

/**
 * Controller for serving requests
 * to user microservice
 * @copyright Serdar Durdyev
 */
@Controller('/user')
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    /**
     * Register user in our system
     * @param userData User data with registration data
     * @returns {Promise<Observable<IUserResponse>>} Observeable object with authenticated data
     */
    @Post('/register')
    @HttpCode(HttpStatus.OK)
    public async registerUser(@Body() userData: RegisterDto): Promise<Observable<IUserResponse>> {
        const registerData = await this.userService.registerUser(userData);
        return registerData
    }
}

