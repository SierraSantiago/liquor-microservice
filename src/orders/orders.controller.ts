import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  //@Post()
  @MessagePattern({cmd:'createOrder'})
  create(@Payload() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  //@Get()
  @MessagePattern({cmd:'findAllOrders'})
  findAll() {
    return this.ordersService.findAll();
  }

  //@Get(':id')
  @MessagePattern({cmd:'findOneOrder'})
  findOne(@Payload('id',ParseIntPipe) id: number) {
    return this.ordersService.findOne(+id);
  }

  //@Patch(':id')
  @MessagePattern({cmd:'updateOrder'})
  update( @Payload() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(updateOrderDto.orderID, updateOrderDto);
  }

  //@Delete(':id')
  @MessagePattern({cmd:'removeOrder'})
  remove(@Payload('id', ParseIntPipe) id: number) {
    return this.ordersService.remove(+id);
  }
}