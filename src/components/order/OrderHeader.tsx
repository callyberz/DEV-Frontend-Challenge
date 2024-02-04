import { formatDate } from '@/utils/DateUtils';
import { Badge } from '../ui/badge';

interface OrderHeaderProps {
  orderInfo: {
    id: number;
    supplier: {
      business_name: string;
    };
    createdAt: string;
    status: string;
  };
}

export const OrderHeader = ({ orderInfo }: OrderHeaderProps) => {
  const { id, supplier, createdAt, status } = orderInfo;

  return (
    <div className="flex items-center justify-between border-b pb-4 border-dashed">
      <div>
        <h2>{`Order ${id}${
          supplier ? ` · ${supplier.business_name}` : ''
        }`}</h2>
        <p className="text-sm text-Gray600">{`Placed on ${formatDate(
          new Date(createdAt)
        )}`}</p>
      </div>
      <Badge>{status}</Badge>
    </div>
  );
};
