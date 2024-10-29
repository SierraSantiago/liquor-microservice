import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,  // Repositorio de TypeORM para la entidad Order
  ) {}

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const newOrder = this.ordersRepository.create(createOrderDto); // Crea la entidad con el DTO
    return await this.ordersRepository.save(newOrder); // Guarda la entidad en la base de datos
  }


  // Método para obtener todas las órdenes
  async findAll(): Promise<Order[]> {
    return await this.ordersRepository.find();  // Devuelve todas las órdenes en la base de datos
  }

  // Método para obtener una orden por su ID
  async findOne(id: number): Promise<Order> {
    return await this.ordersRepository.findOneBy({ orderID: id }); 
}


  // Método para actualizar una orden por su ID
  async update(id: number, updateOrderDto: UpdateOrderDto): Promise<Order> {
    await this.ordersRepository.update(id, updateOrderDto);  // Actualiza la orden con los nuevos datos
    return this.findOne(id);  // Devuelve la orden actualizada
  }

  // Método para eliminar una orden por su ID
  async remove(id: number): Promise<void> {
    await this.ordersRepository.delete(id);  // Elimina la orden de la base de datos
  }
}