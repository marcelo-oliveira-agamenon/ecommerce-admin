export interface DashboardCard1 {
  Month: string;
  Quantity: number;
}

export interface DashboardCard2 {
  Month: string;
  Data: Array<{
    OrderId: string;
    Subtotal: number;
    Month: string;
  } | null>;
}

export interface DashboardCard3 {
  countAllOrders: number;
  countAllPaidOrders: number;
  countAllProducts: number;
  countAllUsers: number;
}

export interface DashboardCard4 {
  data: Array<{
    Name: string;
    Count: number;
  }>;
  total: number;
}
