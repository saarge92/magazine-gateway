import { Transport } from "@nestjs/microservices";
import "dotenv/config";
import { ClientProviderOptions } from "@nestjs/microservices/module/interfaces/clients-module.interface";

export const userMicroserviceConnection: ClientProviderOptions = {
    name: 'USER_MICROSERVICE',
    transport: Transport.REDIS,
    options: {
        url: process.env.REDIS_URL
    }
}