import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { Order } from './entities/order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order])],  // Asegúrate de incluir esto
  controllers: [OrdersController],
  providers: [OrdersService],
  exports: [OrdersService],  // Exporta el servicio si lo necesitas en otros módulos
})
export class OrdersModule {}
