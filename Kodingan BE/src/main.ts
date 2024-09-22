import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api");

  app.use(cors({
    origin: 'https://nestjs-backend-project.de.r.appspot.com',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,  // Jika perlu mengirim cookies
  }));
  const port = process.env.PORT || 3000;
  
  await app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}
bootstrap();
