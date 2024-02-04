import type { ProductItem } from '@/app/types';
import { Button } from './ui/button';

type OrderSummaryProps = {
  salestaxRate: number;
  shippingFee: number;
  products: ProductItem[];
  paymentStatus: string;
  total: number;
  subTotal: number;
};

const SummaryItem = ({ label, value }: { label: string; value: number }) => (
  <div className="flex justify-between mb-4">
    <span className="text-Grey500">{label}</span>
    <span className="text-Grey800">${value.toFixed(2)}</span>
  </div>
);

export const OrderSummary = (props: OrderSummaryProps) => {
  const { shippingFee, paymentStatus, salestaxRate, total, subTotal } = props;

  const tax = subTotal * salestaxRate;

  return (
    <div className="w-full sm:w-1/2 bg-white rounded-lg overflow-hidden sm:ml-auto">
      <div className="p-4">
        <div>
          <SummaryItem label="Subtotal" value={subTotal} />
          <SummaryItem label="Delivery Fee" value={shippingFee} />
          <SummaryItem label="Tax" value={tax} />
          <div className="border-t pt-4"></div>
          <SummaryItem label="Total" value={total + tax} />

          <div className="flex justify-between mb-4">
            <span>Payment Status</span>
            <span>{paymentStatus}</span>
          </div>
        </div>
      </div>
      <div className="p-4">
        <Button>View invoice</Button>
      </div>
    </div>
  );
};
