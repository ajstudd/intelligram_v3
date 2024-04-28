import { ICommentGroup } from '@/components/img-mapper/ImageComment';
import {
  AddressResponsePayload,
  AddressType,
  IAddress,
  ShippingType,
} from './profile';
import { TOrderStatusType, TShippingType } from '@/components';
import { ToUser } from './user';

export interface IOrder {
  address: AddressResponsePayload | string;
  images: string[];
}

export interface OrderStatus {
  name: string;
  count: number;
}
export interface CreateQuoteForm {
  amount: number | null;
  deliveryDate: Date;
  discount: number | null;
  tax: number | null;
  shippingFee: number | null;
  isEmail: boolean;
  isSms: boolean;
  note: string;
}

export interface Address {
  _id: string;
  city: string;
  state: string;
  country: string;
  email: string;
  mobile: string;
  isBillingAddress: boolean;
  isShippingAddress: boolean;
  zipCode: string;
  name: string;
  dial_code: string;
  dial_country_code: string;
  country_code: string;
  address: string;
  addressType: AddressType;
  shippingTypeLabel: ShippingType;
  user: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface User {
  _id: string;
  email: string;
  phone: string;
  name: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Image {
  _id: string;
  id: string;
  image: string;
  commentGroups: ICommentGroup[];
}
export interface Order {
  _id: string;
  address: Address;
  user: User;
  images: Image[];
  orderNumber: string;
  orderStatus: TOrderStatusType;
  amount: number;
  tax: number;
  shippingType: TShippingType;
  shippingTypeLabel: ShippingType;
  createdAt: string;
  updatedAt: Date;
  __v: number;
  note: string;
  discount: number;
  deliveryAt: Date;
  expectedDeliveryAt: Date;
}

// sample response
// {
//   "_id": "65d839bb281b0622e7372318",
//   "address": {
//       "_id": "65d839bb281b0622e7372315",
//       "city": "PHG",
//       "state": "PB",
//       "country": "IND",
//       "email": "j7654894110@gmail.com",
//       "mobile": "+917903935769",
//       "isBillingAddress": true,
//       "isShippingAddress": true,
//       "zipCode": "99501",
//       "name": "AJX",
//       "address": "JALANDHAR ",
//       "addressType": "home",
//       "user": "65d83669af3be5fa781fb6fc",
//       "shippingTypeLabel": "standard",
//       "createdAt": "2024-02-23T06:22:51.886Z",
//       "updatedAt": "2024-03-05T11:40:58.529Z",
//       "__v": 0
//   },
//   "user": {
//       "_id": "65d83669af3be5fa781fb6fc",
//       "email": "j7654894110@gmail.com",
//       "phone": "+917903935769",
//       "name": "Junaid",
//       "role": "USER",
//       "createdAt": "2024-02-23T06:08:41.755Z",
//       "updatedAt": "2024-02-23T06:08:41.755Z",
//       "__v": 0
//   },
//   "images": [
//       {
//           "_id": "65d839a0281b0622e737230f",
//           "image": "1708669344900-5bb21bde-3d51-497a-848b-156efbce09dc.png",
//           "commentGroups": [
//               {
//                   "x": 75.26501766784452,
//                   "y": 34.30962343096235,
//                   "comments": [
//                       {
//                           "type": "text",
//                           "content": "Make this black"
//                       }
//                   ]
//               }
//           ],
//           "createdAt": "2024-02-23T06:22:24.903Z",
//           "updatedAt": "2024-02-23T06:22:24.956Z",
//           "__v": 0
//       }
//   ],
//   "orderNumber": "C0000001",
//   "orderStatus": "confirmed",
//   "note": "Pay on time",
//   "discount": 5,
//   "amount": 65,
//   "tax": 0,
//   "shippingType": "standard",
//   "createdAt": "2024-02-23T06:22:51.975Z",
//   "updatedAt": "2024-02-23T13:55:14.971Z",
//   "__v": 0,
//   "expectedDeliveryAt": "2024-02-28T00:00:00.000Z",
//   "deliveryAt": "2024-02-26T06:22:51.975Z"
// }
export interface OrderResponsePayload {
  message: string;
  order: Order;
}

export interface getOrder {
  amount: number;
  tax: number;
  _id: string;
  address: IAddress;
  user: ToUser;
  images: Image[];
  orderNumber: string;
  orderStatus: string;
  createdAt: string;
  updatedAt: string;
  expectedDeliveryAt: Date;
}

export interface MyOrdersResponsePayload {
  orders: Array<OrderResponsePayload['order']>;
}

export interface getOrderResponse {
  results: getOrder[];
  totalPages: number;
}

export type OrderStatuses = OrderStatus[];

export interface orderByPages {
  status: string;
  currentPage: number;
}

export interface updateStatus {
  orderId: string;
  status: string;
}

export interface updateExpectedDeliveryAt {
  orderId: string;
  expectedDeliveryAt: Date;
}

export interface OrderQuote {
  orderId: string;
  email: string;
  phone: string;
  isEmail: boolean;
  isSms: boolean;
  amount: number;
  discount: number;
  tax: number;
  shippingFee: number;
  deliveryDate: Date;
  note: string;
}
