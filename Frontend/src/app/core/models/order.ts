export class Order {
user_id: number;
payment_id: number;
itemsPrice: number;
taxPrice: number;
shippingPrice: number;
totalPrice: number;
isPaid: boolean;
PaidAt: Date;
address: string;
isDelivered: boolean;
deliveredAt: Date;
status: string;
description: string;
image: string;
}
