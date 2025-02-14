export interface MenuItem {
  ItemID: number;
  ItemName: string;
  Price: number;
  PrepTime: number;
  ImageURL: string;
}

export interface StoreMenu {
  store_name: string;
  store_id: number;
  menu: MenuItem[];
}
