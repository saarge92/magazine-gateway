import { Injectable, Scope, Inject, HttpException } from "@nestjs/common";
import { RegisterDto } from "../dto/register-dto";
import { ClientProxy, RpcException } from "@nestjs/microservices";
import { map, catchError } from "rxjs/operators";
import { Observable } from "rxjs";
import { IUserResponse } from "../dto/interfaces/IUserResponse-interface";

/**
 * User service for requesting data to user-microservice
 * using REDIS
 * @copyright Serdar Durdyev
 */
@Injectable({ scope: Scope.DEFAULT })
export class UserService {
    constructor(@Inject('USER_MICROSERVICE') private readonly userServiceClient: ClientProxy) {
    }

    /**
     * Send register-order for user register
     * to microservice of user
     */
    public async registerUser(registerDto: RegisterDto): Promise<Observable<IUserResponse>> {
        const registerData$ = this.userServiceClient.send<IUserResponse, RegisterDto>({ cmd: 'user-register' }, registerDto);
        return registerData$.pipe(
            catchError(error => {
                throw new HttpException(error || "Something went wrong", error.code || 400)
            })
        )
    }

    /**
     * Login user in system
     * @param userData Data of users info
     */
    public async loginUser(userData: RegisterDto) {
        const loggedData$ = this.userServiceClient.send<any, RegisterDto>({ cmd: 'user-login' }, userData);
        return loggedData$.pipe(
            catchError(error => {
                throw new HttpException(error || "Something went wrong", error.code || 400)
            })
        )
    }
}
