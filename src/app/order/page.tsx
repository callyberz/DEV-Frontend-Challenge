import React from 'react';
import { getOrder } from '@/utils/helper';
import { formatDate } from '@/utils/DateUtils';
import { Fulfillment } from '@/components/order/Fulfillment';
import { Payment } from '@/components/order/Payment';
import { OrderNote } from '@/components/order/OrderNote';
import { ReviewForm } from '@/components/order/ReviewForm';

export default async function Order() {
  const order = await getOrder();
  const {
    fulfillment,
    payment,
    customer_note,
    order_note,
    supplier,
    order_entries
  } = order;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow">
      {/* <OrderHeader data={order} />
      <OrderItems orders={order_entries} /> */}

      <Fulfillment fulfillmentInfo={fulfillment} />

      <Payment paymentInfo={payment} />

      <OrderNote
        OrderInfo={{
          customerNote: customer_note,
          orderNote: order_note,
          supplier
        }}
      />

      <ReviewForm />
    </div>
  );
}
