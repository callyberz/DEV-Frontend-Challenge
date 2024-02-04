// @ts-check
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-Grey200">
      <Link href={'/order'}>To /order</Link>
    </main>
  );
}
