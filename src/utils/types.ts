import { CartItems, OrderItems } from '@prisma/client';

export type ExtendedUser = {
  id: string;
  email: string;
  username: string;
  avatarUrl: string;
  cartItem: CartItems[];
  orderItem: OrderItems[];
  exp?: number;
};

export interface CustomRequest extends Request {
  user: ExtendedUser;
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
