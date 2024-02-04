export interface ProductItem {
  id: number;
  package_price_list_entry: number;
  unit_quantity: number;
  inventory_quantity: number;
  created_at: string; // Consider using a Date object or transforming to a more suitable type
  updated_at: string; // Consider using a Date object or transforming to a more suitable type
  price: number;
  product: number;
  price_per_unit: number;
  needs_approval: boolean;
  product_name: string;
  package_name: string;
  is_by_weight: boolean;
  is_package_weight: boolean;
  is_weight_package: boolean;
  is_weight_weight: boolean;
  average_pack_weight: number;
  charge_type: 'package'; // Use a union type if there are multiple charge types
  track_type: 'weight'; // Use a union type if there are multiple track types
  charge_unit: 'each'; // Use a union type if there are multiple charge units
  quantity_to_charge: number;
  base_unit: 'kilogram'; // Use a union type if there are multiple base units
  pack_weight: number;
  vendor_name: string | null;
  total_price: number;
  storefront_unit_quantity: number | null;
  error: any; // Define a more specific type if possible for the structure of 'error'
}

export interface ProductListType {
  products: ProductItem[];
}
