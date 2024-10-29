import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const logger = new Logger('Main');
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule, {
      transport: Transport.TCP,
      options: {
        port: +process.env.MICROSERVICE_PORT,
      }
   
  });
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
  })); 

  await app.listen();
  logger.log('Microservice is listeningon port ' + +process.env.MICROSERVICE_PORT);
}
bootstrap();