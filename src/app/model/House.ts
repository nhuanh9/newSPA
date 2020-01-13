export interface House {
  id ?: string;
  nameHouse: string;
  categoryHouse?: string;
  // categoryRoom?: string;
  address: string;
  amountBathRoom: string;
  amountBedRoom: string;
  price: string;
  description: string;
  statusHouse?: boolean;
  imageUrls?: string;
}
