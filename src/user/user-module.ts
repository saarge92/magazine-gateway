import { Module } from "@nestjs/common";
import { UserController } from "./controllers/user-controller";
import { UserService } from "./service/user-service";
import { ClientsModule } from "@nestjs/microservices";
import { userMicroserviceConnection } from "src/constans/microservices/user-service-settings";

@Module({
    controllers: [UserController],
    providers: [UserService],
    imports: [
        ClientsModule.register(
            [
                userMicroserviceConnection
            ]
        )
    ]
})
export class UserModule { }