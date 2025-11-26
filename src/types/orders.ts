// src/types/order.ts

export interface OrderItem {
  name: string;
  qty: number;
  image: string;
  price: number;

  // Clothing specific fields
  size: string;
  color: string;
  sku?: string;

  product: string; // Product ObjectId
}

export interface ShippingAddress {
  address: string;
  city: string;
  postalCode: string;
  country: string;
  phoneNumber: string;
}

export interface PaymentResult {
  id?: string;
  status?: string;
  update_time?: string;
  email_address?: string;
}

export type OrderStatus =
  | "Pending"
  | "Processing"
  | "Shipped"
  | "Delivered"
  | "Cancelled"
  | "Returned";

export interface Order {
  _id: string;
  user: {
    _id: string;
    name: string;
    email: string;
  };

  orderItems: OrderItem[];
  shippingAddress: ShippingAddress;
  paymentMethod: string;
  paymentResult?: PaymentResult;

  itemsPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;

  isPaid: boolean;
  paidAt?: string | Date;

  isDelivered: boolean;
  deliveredAt?: string | Date;

  status: OrderStatus;

  trackingNumber?: string;
  courierName?: string;

  createdAt: string;
  updatedAt: string;
}
