import React from 'react';
import { formatDate } from '@/utils/DateUtils';
import { InfoSection } from './ui/InfoSection';

interface PaymentProps {
  paymentInfo: {
    payment_strategy_name: string;
    due_date: string;
    payment_strategy_amount: number;
  };
}

export const Payment = ({
  paymentInfo: { payment_strategy_name, due_date, payment_strategy_amount }
}: PaymentProps) => {
  return (
    <InfoSection title={'Payment'} subTitle={payment_strategy_name}>
      <InfoSection.Item title={payment_strategy_name}>
        {payment_strategy_amount.toFixed(2)}
      </InfoSection.Item>

      <InfoSection.Item title="Payment Due">
        {due_date || formatDate(new Date())}
      </InfoSection.Item>
      {/* TODO/CLee: display more fields/values based on different methods */}
    </InfoSection>
  );
};
