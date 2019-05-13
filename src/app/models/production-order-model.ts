export class ProductionOrderModel{
    id: number;
    customerOrderId: number;
    orderDate: Date;
    deliveryDate: Date;
    color: string;
    motiv: string;
    amount: number;
    orderItem: number;
    orderPostition: number;
    productionStatusId: number;
}

export class ProductionOrderFormModel{
    customerOrderId: number;
    orderDate: Date;
    deliveryDate: Date;
    color: string;
    motiv: string;
    amount: number;
    orderItem: number;
    orderPostition: number;
    productionStatusId: number;
}