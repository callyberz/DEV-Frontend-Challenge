import type { ProductListType } from '@/app/types';
import { ProductItem } from './ui/ProducItem';

export const ProductList = ({ products }: ProductListType) => {
  return (
    <div>
      {products.map((order) => {
        return <ProductItem key={order.id} product={order} />;
      })}
    </div>
  );
};
