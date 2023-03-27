import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/jwt.guard';
import { CartItemsModule } from './cart-items/cart-items.module';
import { CategoriesModule } from './categories/categories.module';

import { OrderItemsModule } from './order-items/order-items.module';
import { OrdersModule } from './orders/orders.module';
import { PrismaModule } from './prisma/prisma.module';

import { ProductsModule } from './products/products.module';
import { S3Service } from './s3/s3.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UsersModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
    }),
    ProductsModule,
    CategoriesModule,
    CartItemsModule,
    OrdersModule,
    OrderItemsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    S3Service,
    { provide: 'APP_GUARD', useClass: JwtAuthGuard },
  ],
})
export class AppModule {}
