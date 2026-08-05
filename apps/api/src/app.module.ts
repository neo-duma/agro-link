import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    // módulos de domínio serão adicionados aqui na Fase 1:
    // UsersModule, ProdutoresModule, ProdutosModule, PedidosModule, AuthModule...
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
