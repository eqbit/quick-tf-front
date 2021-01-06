import React, { memo, useCallback, useMemo } from 'react';
import ReactCharts from 'highcharts-react-official';
import * as Highcharts from 'highcharts';
import { RegisteredListing } from '../../../../../../../../../../api/requests/listings/types';

type Props = {
  registeredListings: RegisteredListing[];
  onPointClick: (steamid: string) => void;
};

const Component = ({ registeredListings, onPointClick }: Props) => {
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
    const rawIntent = intent === 'Buy listings' ? 0 : 1;
    return registeredListings.find(item =>
      item.intend === rawIntent && new Date(item.date_time).getTime() === time
    );
  }, [ registeredListings ]);

  const options: Highcharts.Options = {
    title: {
      text: 'Past listings'
    },
    xAxis: {
      type: 'datetime',
    },
    yAxis: {
      title: {
        text: 'Prices',
      },
      min: 0,
    },
    series: [
      {
        type: 'line',
        color: '#AD0000',
        name: 'Sell listings',
        data: sellListings.map(listing =>
          [
            new Date(listing.date_time).getTime(),
            Number(listing.price_keys) + Math.round(Number(listing.price_metal) / 60 * 100) / 100
          ] as any
        )
      },
      {
        type: 'line',
        name: 'Buy listings',
        data: buyListings.map(listing =>
          [
            new Date(listing.date_time).getTime(),
            Number(listing.price_keys) + Math.round(Number(listing.price_metal) / 60 * 100) / 100
          ] as any
        )
      },
    ],
    tooltip: {
      pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} keys</b>',
    },
    plotOptions: {
      series: {
        point: {
          events: {
            click: function () {
              const item = getItem(this.series.name, this.x);
              item && onPointClick(item.steamid);
            },
          }
        }
      }
    },
  };

  return (
    <ReactCharts
      highcharts={Highcharts}
      options={options}
    />
  )
};

export const Charts = memo(Component);
