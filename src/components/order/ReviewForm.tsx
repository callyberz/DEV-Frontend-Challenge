import React from 'react';
import { InfoSection } from './ui/InfoSection';
import { Button } from '../ui/button';

export const ReviewForm = () => {
  return (
    <div className="border-t pt-4 text-Grey800">
      <InfoSection.Item title={'Send another note'} />
      <form>
        <div className="flex flex-col space-y-2">
          <textarea
            id="message"
            rows={10}
            className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300"
            placeholder="Write your thoughts here..."
          />
          <Button className="w-1/4 self-end" variant="secondary">
            Send note
          </Button>
        </div>
      </form>
    </div>
  );
};
