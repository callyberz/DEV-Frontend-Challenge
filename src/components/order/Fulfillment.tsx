import { formatDate } from '@/utils/DateUtils';
import { InfoSection } from './ui/InfoSection';
import React from 'react';

interface FulfillmentProps {
  fulfillmentInfo: {
    type_display: string;
    fulfillment_address: string;
    instructions: string;
    pickup_start_time: string;
    pickup_end_time: string;
  };
}

export const Fulfillment = ({ fulfillmentInfo }: FulfillmentProps) => {
  const {
    type_display,
    fulfillment_address,
    instructions,
    pickup_start_time,
    pickup_end_time
  } = fulfillmentInfo;
  return (
    <InfoSection title={type_display} subTitle="Toronto Central">
      <InfoSection.Item title={`${type_display} Date`}>
        {pickup_start_time || formatDate(new Date())}
      </InfoSection.Item>

      <InfoSection.Item title={`${type_display} Timeslot`}>
        {pickup_start_time || 'start timeslot'} -{' '}
        {pickup_end_time || 'end timeslot'}
      </InfoSection.Item>

      <InfoSection.Item title={`${type_display} Address`}>
        {fulfillment_address || 'testing address'}
      </InfoSection.Item>

      <InfoSection.Item title={`${type_display} Instructions`}>
        {/* using || here for testing, as some input is empty string instead of falsey value */}
        {instructions || 'testing instructions'}
      </InfoSection.Item>
    </InfoSection>
  );
};
