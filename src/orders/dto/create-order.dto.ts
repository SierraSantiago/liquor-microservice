import { IsString, IsInt, IsDate, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateOrderDto {
    @IsString()
    @IsNotEmpty()
    liquorType: string;

    @IsInt()
    @IsNotEmpty()
    quantity: number;

    @IsInt()
    @IsNotEmpty()
    stockLevel: number;

    @IsDate()
    @IsOptional() // Opción si deseas que se pueda omitir al crear la orden
    orderDate?: Date;

    @IsString()
    @IsNotEmpty()
    supplierContact: string;

    @IsInt()
    @IsNotEmpty()
    reorderThreshold: number;

    @IsInt()
    @IsOptional() // Permitir que el campo sea opcional si no siempre hay un evento
    eventServed?: number;
}
