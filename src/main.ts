import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
// import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  app.setGlobalPrefix('api');
  const PORT = config.get<number>('PORT');
  // app.use(cookieParser());
  await app.listen(PORT || 5050, () => {
    console.log(`Server started at http://localhost:${PORT}`);
  });
}
bootstrap();
