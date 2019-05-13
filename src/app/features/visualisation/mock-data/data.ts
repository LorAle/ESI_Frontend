import { ProductionOrderModel } from "src/app/models";

const deliveryDate = new Date();
deliveryDate.setDate(deliveryDate.getDate() + 10)

export const PRODCUTION_ORDERS: ProductionOrderModel[] = [
    {
        id: 1,
        orderItem: 1,
        customerOrderId: 1,
        orderDate: new Date(),
        deliveryDate: deliveryDate,
        color: 'blue',
        motiv: "test",
        amount: 2,
        orderPosition: 1,
        productionStatusId: 1
    },
    {
        id: 2,
        orderItem: 2,
        customerOrderId: 2,
        orderDate: new Date(),
        deliveryDate: deliveryDate,
        color: 'red',
        motiv: "test2",
        amount: 15,
        orderPosition: 2,
        productionStatusId: 2
    },
    {
        id: 3,
        orderItem: 3,
        customerOrderId: 3,
        orderDate: new Date(),
        deliveryDate: deliveryDate,
        color: 'yellow',
        motiv: "test3",
        amount: 15,
        orderPosition: 3,
        productionStatusId: 3
    }
]