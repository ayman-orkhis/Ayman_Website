import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const logger = new Logger('Bootstrap');

  // Enable CORS
  const frontendUrl = configService.get<string>('FRONTEND_URL', 'http://localhost:5174');
  app.enableCors({
    origin: [frontendUrl, 'http://localhost:5174', 'http://127.0.0.1:5174'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Accept',
    credentials: true,
  });

  // Enable global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  // Start the application
  const port = configService.get<number>('PORT', 3001);
  await app.listen(port);
  logger.log(`Application is running on: http://localhost:${port}`);
  logger.log(`CORS enabled for: ${frontendUrl}`);
}

bootstrap().catch(err => {
  console.error('Failed to start application:', err);
  process.exit(1);
});
