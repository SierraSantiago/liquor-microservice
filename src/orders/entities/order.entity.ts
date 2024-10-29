import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
import { IsString, IsInt, IsDate, IsOptional, IsNotEmpty, IsNumber } from 'class-validator';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  @IsInt()
  orderID: number;

  @Column()
  @IsString()
  @IsNotEmpty()
  liquorType: string;

  @Column('int')
  @IsInt()
  @IsNotEmpty()
  quantity: number;

  @Column('int')
  @IsInt()
  @IsNotEmpty()
  stockLevel: number;

  @CreateDateColumn()
  @IsDate()
  orderDate: Date;

  @Column()
  @IsString()
  @IsNotEmpty()
  supplierContact: string;

  @Column('int')
  @IsInt()
  @IsNotEmpty()
  reorderThreshold: number;

  @Column({ nullable: true })
  @IsInt()
  @IsOptional()
  eventServed?: number;
}
