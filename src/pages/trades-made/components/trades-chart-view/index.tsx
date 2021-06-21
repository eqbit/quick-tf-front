import React, { memo } from 'react';
import classNamesBind from 'classnames/bind';
import styles from './index.module.scss';
import * as Highcharts from 'highcharts'
import ReactCharts from 'highcharts-react-official'

const CLASS_NAME = 'trades-chart';
const cn = classNamesBind.bind(styles);

type Props = {
  data: Array<[string, number]>;
};

const Component = ({ data }: Props) => {
  const options: Highcharts.Options = {
    title: {
      text: 'Past listings'
    },
    xAxis: {
      type: 'datetime',
    },
    yAxis: {
      title: {
        text: 'Trades made',
      },
      min: 0,
    },
    series: [
      {
        type: 'line',
        color: '#AD0000',
        name: '',
        data,
      },
    ],
    tooltip: {
      pointFormat: '<b>{point.y} trades</b>',
    },
  };

  return (
    <div className={cn(CLASS_NAME)}>
      <ReactCharts
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
};

export const TradesChartView = memo(Component);
