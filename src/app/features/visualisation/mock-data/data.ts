import { ProductionOrderModel } from "src/app/models";

const deliveryDate = new Date();
deliveryDate.setDate(deliveryDate.getDate() + 10)

export const PRODCUTION_ORDERS: ProductionOrderModel[] = [
    {
        Id: 1,
        OrderItem: 1,
        CustomerOrderId: 1,
        OrderDate: new Date(),
        DeliveryDate: deliveryDate,
        Color: 'blue',
        Motiv: "test",
        Amount: 2,
        OrderPosition: 1,
        ProductionStatusId: 1
    },
    {
        Id: 2,
        OrderItem: 2,
        CustomerOrderId: 2,
        OrderDate: new Date(),
        DeliveryDate: deliveryDate,
        Color: 'red',
        Motiv: "test2",
        Amount: 15,
        OrderPosition: 2,
        ProductionStatusId: 2
    },
    {
        Id: 3,
        OrderItem: 3,
        CustomerOrderId: 3,
        OrderDate: new Date(),
        DeliveryDate: deliveryDate,
        Color: 'yellow',
        Motiv: "test3",
        Amount: 15,
        OrderPosition: 3,
        ProductionStatusId: 3
    }
]