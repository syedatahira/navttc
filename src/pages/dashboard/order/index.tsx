import { useEffect, useState } from "react";
import {OrdersTable} from "./order-table";
import type { Order } from "@/types/orders";

const dummyOrders: Order[] = [
  {
    _id: "65f1c8a9d1234567890aaa01",
    user: { _id: "65f1c8a9d111111111111111", name: "Ali Raza", email: "ali@example.com" },
    orderItems: [
      {
        name: "Men’s Casual Shirt",
        qty: 2,
        image: "/images/shirt1.jpg",
        price: 2200,
        size: "M",
        color: "Blue",
        sku: "SHIRT-M-BLUE-01",
        product: "65f1c8a9d222222222222222",
      },
    ],
    shippingAddress: {
      address: "Street 12, Model Town",
      city: "Lahore",
      postalCode: "54000",
      country: "Pakistan",
      phoneNumber: "0300-1234567",
    },
    paymentMethod: "COD",
    paymentResult: {},
    itemsPrice: 4400,
    taxPrice: 200,
    shippingPrice: 150,
    totalPrice: 4750,
    isPaid: false,
    isDelivered: false,
    status: "Pending",
    trackingNumber: "",
    courierName: "",
    createdAt: "2024-11-10T08:30:00Z",
    updatedAt: "2024-11-10T08:30:00Z",
  },
  {
    _id: "65f1c8a9d1234567890aaa02",
    user: { _id: "65f1c8a9d333333333333333", name: "Sara Khan", email: "sara@example.com" },
    orderItems: [
      {
        name: "Women's Summer Dress",
        qty: 1,
        image: "/images/dress1.jpg",
        price: 3500,
        size: "L",
        color: "Red",
        sku: "DRS-L-RED-02",
        product: "65f1c8a9d444444444444444",
      },
    ],
    shippingAddress: {
      address: "DHA Phase 4",
      city: "Karachi",
      postalCode: "75500",
      country: "Pakistan",
      phoneNumber: "0312-9876543",
    },
    paymentMethod: "Stripe",
    paymentResult: {
      id: "pay_001",
      status: "Completed",
      update_time: "2024-11-11T10:00:00Z",
      email_address: "sara@example.com",
    },
    itemsPrice: 3500,
    taxPrice: 300,
    shippingPrice: 200,
    totalPrice: 4000,
    isPaid: true,
    paidAt: "2024-11-11T10:10:00Z",
    isDelivered: false,
    status: "Processing",
    trackingNumber: "TRK-88990",
    courierName: "Leopards",
    createdAt: "2024-11-11T09:40:00Z",
    updatedAt: "2024-11-11T10:10:00Z",
  },
  {
    _id: "65f1c8a9d1234567890aaa03",
    user: { _id: "65f1c8a9d555555555555555", name: "Hassan Ali", email: "hassan@example.com" },
    orderItems: [
      {
        name: "Men's Denim Jeans",
        qty: 1,
        image: "/images/jeans1.jpg",
        price: 2800,
        size: "32",
        color: "Dark Blue",
        sku: "JEANS-32-BLU-01",
        product: "65f1c8a9d666666666666666",
      },
    ],
    shippingAddress: {
      address: "Cantt Area",
      city: "Rawalpindi",
      postalCode: "46000",
      country: "Pakistan",
      phoneNumber: "0345-4455667",
    },
    paymentMethod: "COD",
    itemsPrice: 2800,
    taxPrice: 150,
    shippingPrice: 200,
    totalPrice: 3150,
    isPaid: false,
    isDelivered: false,
    status: "Pending",
    trackingNumber: "",
    courierName: "",
    createdAt: "2024-11-12T08:30:00Z",
    updatedAt: "2024-11-12T08:30:00Z",
  },
  {
    _id: "65f1c8a9d1234567890aaa04",
    user: { _id: "65f1c8a9d777777777777777", name: "Zainab Fatima", email: "zainab@example.com" },
    orderItems: [
      {
        name: "Women's Kurti",
        qty: 2,
        image: "/images/kurti1.jpg",
        price: 1800,
        size: "M",
        color: "Black",
        sku: "KRT-M-BLK-03",
        product: "65f1c8a9d888888888888888",
      },
    ],
    shippingAddress: {
      address: "North Nazimabad",
      city: "Karachi",
      postalCode: "74600",
      country: "Pakistan",
      phoneNumber: "0301-2223334",
    },
    paymentMethod: "COD",
    itemsPrice: 3600,
    taxPrice: 200,
    shippingPrice: 180,
    totalPrice: 3980,
    isPaid: false,
    isDelivered: true,
    deliveredAt: "2024-11-15T14:20:00Z",
    status: "Delivered",
    trackingNumber: "TRK-12345",
    courierName: "TCS",
    createdAt: "2024-11-13T09:20:00Z",
    updatedAt: "2024-11-15T14:20:00Z",
  },
  {
    _id: "65f1c8a9d1234567890aaa05",
    user: { _id: "65f1c8a9d999999999999999", name: "Mudassir Ahmed", email: "mudassir@example.com" },
    orderItems: [
      {
        name: "Men's Hoodie",
        qty: 1,
        image: "/images/hoodie1.jpg",
        price: 3200,
        size: "XL",
        color: "Grey",
        sku: "HD-XL-GRY-02",
        product: "65f1c8a9d101010101010101",
      },
    ],
    shippingAddress: {
      address: "Saddar",
      city: "Peshawar",
      postalCode: "25000",
      country: "Pakistan",
      phoneNumber: "0333-5566778",
    },
    paymentMethod: "Stripe",
    paymentResult: {
      id: "pay_002",
      status: "Completed",
      update_time: "2024-11-14T10:30:00Z",
      email_address: "mudassir@example.com",
    },
    itemsPrice: 3200,
    taxPrice: 250,
    shippingPrice: 200,
    totalPrice: 3650,
    isPaid: true,
    paidAt: "2024-11-14T10:40:00Z",
    isDelivered: false,
    status: "Shipped",
    trackingNumber: "TRK-99887",
    courierName: "Leopards",
    createdAt: "2024-11-14T09:15:00Z",
    updatedAt: "2024-11-14T10:40:00Z",
  },
  {
    _id: "65f1c8a9d1234567890aaa06",
    user: { _id: "65f1c8a9d121212121212121", name: "Fatima Noor", email: "fatima@example.com" },
    orderItems: [
      {
        name: "Kids T-Shirt",
        qty: 3,
        image: "/images/kidshirt1.jpg",
        price: 700,
        size: "S",
        color: "Green",
        sku: "KTS-S-GRN-04",
        product: "65f1c8a9d131313131313131",
      },
    ],
    shippingAddress: {
      address: "Johar Town",
      city: "Lahore",
      postalCode: "54000",
      country: "Pakistan",
      phoneNumber: "0321-7654321",
    },
    paymentMethod: "COD",
    itemsPrice: 2100,
    taxPrice: 120,
    shippingPrice: 150,
    totalPrice: 2370,
    isPaid: false,
    isDelivered: false,
    status: "Processing",
    trackingNumber: "",
    courierName: "",
    createdAt: "2024-11-16T07:20:00Z",
    updatedAt: "2024-11-16T07:20:00Z",
  },
  {
    _id: "65f1c8a9d1234567890aaa07",
    user: { _id: "65f1c8a9d141414141414141", name: "Ayesha Jameel", email: "ayesha@example.com" },
    orderItems: [
      {
        name: "Women's Abaya",
        qty: 1,
        image: "/images/abaya1.jpg",
        price: 4500,
        size: "M",
        color: "Brown",
        sku: "ABY-M-BRN-01",
        product: "65f1c8a9d151515151515151",
      },
    ],
    shippingAddress: {
      address: "Gulshan-e-Iqbal",
      city: "Karachi",
      postalCode: "75300",
      country: "Pakistan",
      phoneNumber: "0302-2233445",
    },
    paymentMethod: "Stripe",
    paymentResult: {
      id: "pay_003",
      status: "Completed",
      update_time: "2024-11-17T09:50:00Z",
      email_address: "ayesha@example.com",
    },
    itemsPrice: 4500,
    taxPrice: 350,
    shippingPrice: 200,
    totalPrice: 5050,
    isPaid: true,
    paidAt: "2024-11-17T10:00:00Z",
    isDelivered: true,
    deliveredAt: "2024-11-19T15:12:00Z",
    status: "Delivered",
    trackingNumber: "TRK-55892",
    courierName: "TCS",
    createdAt: "2024-11-17T09:30:00Z",
    updatedAt: "2024-11-19T15:12:00Z",
  },
  {
    _id: "65f1c8a9d1234567890aaa08",
    user: { _id: "65f1c8a9d161616161616161", name: "Uzair Khan", email: "uzair@example.com" },
    orderItems: [
      {
        name: "Men's Polo Shirt",
        qty: 1,
        image: "/images/polo1.jpg",
        price: 1800,
        size: "L",
        color: "White",
        sku: "POLO-L-WHT-03",
        product: "65f1c8a9d171717171717171",
      },
    ],
    shippingAddress: {
      address: "Shah Faisal Colony",
      city: "Karachi",
      postalCode: "75230",
      country: "Pakistan",
      phoneNumber: "0335-8899776",
    },
    paymentMethod: "COD",
    itemsPrice: 1800,
    taxPrice: 120,
    shippingPrice: 150,
    totalPrice: 2070,
    isPaid: false,
    isDelivered: false,
    status: "Cancelled",
    trackingNumber: "",
    courierName: "",
    createdAt: "2024-11-18T13:00:00Z",
    updatedAt: "2024-11-19T08:00:00Z",
  },
  {
    _id: "65f1c8a9d1234567890aaa09",
    user: { _id: "65f1c8a9d181818181818181", name: "Asad Mehmood", email: "asad@example.com" },
    orderItems: [
      {
        name: "Women's Winter Coat",
        qty: 1,
        image: "/images/coat1.jpg",
        price: 6500,
        size: "XL",
        color: "Navy Blue",
        sku: "CT-XL-BLU-05",
        product: "65f1c8a9d191919191919191",
      },
    ],
    shippingAddress: {
      address: "Bahria Town",
      city: "Islamabad",
      postalCode: "44000",
      country: "Pakistan",
      phoneNumber: "0344-1122334",
    },
    paymentMethod: "Stripe",
    itemsPrice: 6500,
    taxPrice: 480,
    shippingPrice: 200,
    totalPrice: 7180,
    isPaid: true,
    paidAt: "2024-11-18T11:30:00Z",
    isDelivered: false,
    status: "Shipped",
    trackingNumber: "TRK-77766",
    courierName: "M&P",
    createdAt: "2024-11-18T10:30:00Z",
    updatedAt: "2024-11-18T11:30:00Z",
  },
  {
    _id: "65f1c8a9d1234567890aaa10",
    user: { _id: "65f1c8a9d202020202020202", name: "Maryam Ali", email: "maryam@example.com" },
    orderItems: [
      {
        name: "Kids Hoodie",
        qty: 2,
        image: "/images/kidhoodie1.jpg",
        price: 1500,
        size: "M",
        color: "Pink",
        sku: "KHD-M-PNK-08",
        product: "65f1c8a9d212121212121212",
      },
    ],
    shippingAddress: {
      address: "Wapda Town",
      city: "Lahore",
      postalCode: "54770",
      country: "Pakistan",
      phoneNumber: "0309-5566778",
    },
    paymentMethod: "COD",
    itemsPrice: 3000,
    taxPrice: 200,
    shippingPrice: 150,
    totalPrice: 3350,
    isPaid: false,
    isDelivered: true,
    deliveredAt: "2024-11-20T14:50:00Z",
    status: "Returned",
    trackingNumber: "",
    courierName: "",
    createdAt: "2024-11-19T09:40:00Z",
    updatedAt: "2024-11-20T14:50:00Z",
  },
];


const OrdersPage = () => {
  const [orders, setOrders] = useState<Order[]>(dummyOrders);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchOrders = async () => {
    try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';
      const response = await fetch(`${baseUrl}/orders`);
      const result = await response.json();
      setOrders(result.data);
    } catch (err) {
      setError("Failed to load orders. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // fetchOrders();
    
  }, []);

  return (
    <div className="p-6 w-full">
      <h1 className="text-3xl font-bold mb-6">Orders Dashboard</h1>

      {/* Loading */}
      {loading && (
        <div className="text-gray-600 text-center text-lg">
          Loading orders...
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="text-red-600 text-center mb-4">
          {error}
        </div>
      )}

      {/* Orders Table */}
      {!loading && !error && <OrdersTable orders={orders} />}
    </div>
  );
};

export default OrdersPage;
