import React from 'react';
import Link from 'next/link';
import { getOrder } from '@/utils/helper';
import { Fulfillment } from '@/components/order/Fulfillment';
import { Payment } from '@/components/order/Payment';
import { OrderNote } from '@/components/order/OrderNote';
import { ReviewForm } from '@/components/order/ReviewForm';
import { OrderHeader } from '@/components/order/OrderHeader';
import { ProductList } from '@/components/order/ProductList';
import { OrderSummary } from '@/components/OrderSummary';

export default async function Order() {
  const order = await getOrder();
  const {
    id,
    created_at,
    status,
    fulfillment,
    payment,
    customer_note,
    order_note,
    supplier,
    order_entries
  } = order;

  return (
    <div className="max-w-3xl mx-auto md:my-10">
      <Link href="/">Back to Orders</Link>

      <div className="p-6 bg-white rounded-lg shadow">
        <OrderHeader
          orderInfo={{
            id,
            supplier,
            createdAt: created_at,
            status
          }}
        />

        <ProductList products={order_entries} />

        <OrderSummary
          products={order_entries}
          salestaxRate={order.salestax_rate}
          shippingFee={order.fulfillment_fees}
          paymentStatus={payment.status}
          total={order.total}
          subTotal={order.subtotal}
        />

        <Fulfillment fulfillmentInfo={fulfillment} />

        <Payment paymentInfo={payment} />

        <OrderNote
          orderInfo={{
            customerNote: customer_note,
            orderNote: order_note,
            supplier
          }}
        />

        <ReviewForm />
      </div>
    </div>
  );
}
