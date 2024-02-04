import { formatDate } from '@/utils/DateUtils';
import { Badge } from '../ui/badge';

export const OrderHeader = ({ data }) => {
  const { id, supplier, createdAt, status } = data;

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
