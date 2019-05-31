export class ProductionOrderModel{
    Id: number;
    CustomerOrderId: number;
    OrderDate: Date;
    DeliveryDate: Date;
    Color: string;
    Motiv: string;
    Amount: number;
    OrderItem: number;
    OrderPosition: number;
    ProductionStatusId: number;
}

export class ProductionOrderFormModel{
    CustomerOrderId: number;
    OrderDate: Date;
    DeliveryDate: Date;
    Color: string;
    Motiv: string;
    Amount: number;
    OrderItem: number;
    OrderPosition: number;
    ProductionStatusId: number;
}