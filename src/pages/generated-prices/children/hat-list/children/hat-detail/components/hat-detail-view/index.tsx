import React, { memo, useCallback, useMemo } from 'react';
import Charts from 'highcharts-react-official';
import * as Highcharts from 'highcharts';
import { RegisteredListing } from '../../../../../../../../api/requests/listings/types';
import { userInfoRequest } from '../../../../../../../../api/requests/user-info';

type Props = {
  name: string;
  quality: string;
  effect?: string;
  registeredListings: RegisteredListing[];
};

const Component = ({ registeredListings = [], name, effect }: Props) => {
  const [ sellListings, buyListings ] = useMemo(() => {
    const listings = registeredListings.sort((a, b) =>
      new Date(b.date_time).getTime() - new Date(a.date_time).getTime()
    );

    return [
      listings.filter(listing => listing.intend === 1),
      listings.filter(listing => listing.intend === 0),
    ]
  }, [ registeredListings ]);

  const getItem = useCallback((intent: string, time: number) => {
    const rawIntent = intent === 'buy' ? 0 : 1;
    return registeredListings.find(item =>
      item.intend === rawIntent && new Date(item.date_time).getTime() === time
    );
  }, [registeredListings]);

  const options: Highcharts.Options = {
    title: {
      text: 'Past listings'
    },
    xAxis: {
      type: 'datetime',
    },
    series: [
      {
        type: 'line',
        color: '#AD0000',
        name: 'sell',
        data: sellListings.map(listing => [ new Date(listing.date_time).getTime(), Number(listing.price_keys) ])
      },
      {
        type: 'line',
        name: 'buy',
        data: buyListings.map(listing => [ new Date(listing.date_time).getTime(), Number(listing.price_keys) ])
      },
    ],
    tooltip: {
      pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} keys</b>',
    },
    plotOptions: {
      series: {
        point: {
          events: {
            click: function() {
              const item = getItem(this.series.name, this.x);
              item && userInfoRequest(item?.steamid).then(response => console.log(response?.data.avatarfull));
            }
          }
        }
      }
    },
  };

  return (
    <div>
      <Charts
        highcharts={Highcharts}
        options={options}
      />
    </div>
  )
};

export const HatDetailView = memo(Component);
