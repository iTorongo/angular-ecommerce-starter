export type Cart = {
  id: number;
  totalProducts: number;
  products: CartProducts[];
};

type CartProducts = {
  id: number;
  quantity: number;
  title?: string;
  price?: number;
};

export type CartRequest = {
  userId: number;
  products: CartProducts[];
};
