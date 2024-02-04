import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export async function getOrder() {
  const response = await fetch(
    'https://vop4f76uc3.execute-api.us-east-1.amazonaws.com'
  );
  const data = await response.json();
  return data;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
