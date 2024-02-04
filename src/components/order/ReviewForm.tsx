import React from 'react';
import { InfoSection } from './ui/InfoSection';
import { Button } from '../ui/button';
import { submitRequest } from '@/app/action';

export const ReviewForm = () => {
  return (
    <div className="border-t pt-4 text-Grey800 border-dashed">
      <InfoSection.Item title={'Send another note'} />
      <form action={submitRequest}>
        <div className="flex flex-col space-y-2">
          <textarea
            name="note"
            id="note"
            rows={10}
            className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300"
            placeholder="Write your thoughts here..."
          />
          <Button className="w-1/4 self-end" type="submit">
            Send note
          </Button>
        </div>
      </form>
    </div>
  );
};
