import React, { memo } from 'react';
import { RegisteredListing } from '../../../../../../../../api/requests/listings/types';

type Props = {
  name: string;
  quality: string;
  effect?: string;
  registeredListings: RegisteredListing[];
};

const Component = ({ registeredListings, name, effect }: Props) => {
  return (
    <div>
      {Boolean(registeredListings) && registeredListings.map(({ intend, price_keys, price_metal, date_time, steamid }) => (
        <div>
          <div>{`${intend ? 'Selling' : 'Buying'} ${effect} ${name}`}</div>
          <div>{`${Number(price_keys) ? `${price_keys} keys` : ''}${Number(price_metal) ? ` ${price_metal} ref` : ''}`}</div>
          <div>{new Date(date_time).toLocaleDateString()}</div>
          <div>
            <a href={`https://backpack.tf/profiles/${steamid}`}>{steamid}</a>
          </div>
        </div>
      ))}
    </div>
  )
};

export const HatDetailView = memo(Component);
