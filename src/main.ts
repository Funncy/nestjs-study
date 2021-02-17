import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      //DTO에 있는 property 외의 내용 차단
      whitelist: true,
      //DTO에 정의 되지 않은 property가 들어오면 Throw Error
      forbidNonWhitelisted: true,
      //DTO에 정의한 Value Type으로 값을 넘겨줌
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
