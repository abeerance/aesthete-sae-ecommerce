import { CartItem, OrderItem } from '@prisma/client';

export type User = {
  id: string;
  email: string;
  username: string;
  avatarUrl: string;
  cartItem: CartItem[];
  orderItem: OrderItem[];
  exp?: number;
};

export interface CustomRequest extends Request {
  user: User;
}

export type UserPayload = {
  id: string;
  username: string;
  email: string;
};

export type UpdateData = {
  email?: string;
  username?: string;
  password?: string;
  avatarUrl?: string;
};
