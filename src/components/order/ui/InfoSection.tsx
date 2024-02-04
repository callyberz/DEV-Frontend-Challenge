import React from 'react';

interface InfoSectionProps {
  title: string;
  subTitle?: string;
  children: React.ReactNode;
}

export const InfoSection = (props: InfoSectionProps) => {
  const { title, subTitle } = props;
  return (
    <div className="pt-4 text-black">
      <div className="flex items-center justify-between gap-2">
        <div>{`${title}${subTitle ? ` · ${subTitle}` : ''}`}</div>
        <div className="h-px bg-Grey200 flex-1" />
      </div>

      <div className="mt-2">{props.children}</div>
    </div>
  );
};

type InfoSectionItemProps = {
  title: string;
  children?: React.ReactNode;
};

export const Item = ({
  title = 'Default Title',
  children
}: InfoSectionItemProps) => (
  <div className={'flex justify-between flex-wrap my-2'}>
    <div className="text-Grey500 text-sm font-medium">{title}</div>
    {children}
  </div>
);

InfoSection.Item = Item;
