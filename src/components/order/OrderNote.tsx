import { InfoSection } from './ui/InfoSection';
import React from 'react';

interface Supplier {
  business_name: string;
}

interface OrderNoteProps {
  orderInfo: {
    orderNote: string;
    customerNote: string;
    supplier: Supplier;
  };
}

export const OrderNote = ({ orderInfo }: OrderNoteProps) => {
  const { orderNote, customerNote, supplier } = orderInfo;
  return (
    <InfoSection title={'Order Notes'}>
      <InfoSection.Item title={'Checkout note from you'}>
        <div className="whitespace-pre-line">{customerNote || ''}</div>
      </InfoSection.Item>

      <InfoSection.Item title={`Note from ${supplier.business_name}`}>
        <div className="w-full whitespace-pre-line">
          {orderNote || 'Thank you for your order!'}
        </div>
      </InfoSection.Item>
    </InfoSection>
  );
};
