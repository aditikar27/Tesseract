export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
    storeId: number; // Add storeId
  }
  
  export interface Order {
    storeId: number; // ID of the store the order belongs to
    tokenNumber: string; // Token number generated after payment
    items: CartItem[]; // List of items in the order
    totalAmount: number; // Total amount of the order
    timestamp: string; // Time when the order was placed
  }