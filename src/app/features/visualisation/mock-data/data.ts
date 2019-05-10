import { ProductionOrderModel } from "src/app/models/production-order-model";

const deliveryDate = new Date();
deliveryDate.setDate(deliveryDate.getDate() + 10)

export const PRODCUTION_ORDERS: ProductionOrderModel[] = [
    {
        orderNumber: 'C-20170327-90125',
        customerOrderId: 1,
        orderDate: new Date(),
        deliveryDate: deliveryDate,
        materialId: 1,
        color: 'blue',
        motivId: 1,
        amount: 2,
        itemPostition: 1,
        sequencePostition: 1,
        productionStatusId: 1
    },
    {
        orderNumber: 'B-20170327-80',
        customerOrderId: 2,
        orderDate: new Date(),
        deliveryDate: deliveryDate,
        materialId: 1,
        color: 'red',
        motivId: 2,
        amount: 15,
        itemPostition: 1,
        sequencePostition: 2,
        productionStatusId: 2
    },
    {
        orderNumber: 'B-20170327-79',
        customerOrderId: 3,
        orderDate: new Date(),
        deliveryDate: deliveryDate,
        materialId: 1,
        color: 'yellow',
        motivId: 1,
        amount: 100,
        itemPostition: 1,
        sequencePostition: 3,
        productionStatusId: 3
    }
]