import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import productImage from './productImage.png';

export const ProductItem = ({ product }) => {
  const {
    id,
    product_name,
    unit_quantity,
    price_per_unit,
    charge_type,
    total_price
  } = product;
  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-200">
      <div className="flex items-center">
        <Image
          src={productImage}
          alt={product_name}
          className="h-16 w-16 object-cover mr-4"
        />
        <div className="flex flex-col">
          <span className="text-Grey800">
            {product_name} x{unit_quantity}
          </span>
          <span className="text-Grey600">
            ${price_per_unit} / {charge_type}
          </span>
        </div>
      </div>

      <div className="flex flex-col items-end">
        <Link
          className="text-Green600 hover:text-green-600 underline text-sm"
          href={`/product/${id}`}
        >
          view
        </Link>
        <span className="text-md text-Grey800">${total_price.toFixed(2)}</span>
      </div>
    </div>
  );
};
