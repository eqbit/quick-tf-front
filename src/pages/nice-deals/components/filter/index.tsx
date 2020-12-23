import React, { memo, useCallback, useEffect, useState } from 'react';
import styles from './index.module.scss';
import classNamesBind from 'classnames/bind';
import Slider from '@material-ui/core/Slider';
import { debounce } from 'lodash-es';

const CLASS_NAME = 'filter';
const cn = classNamesBind.bind(styles);

type Props = {
  profitPercent: number;
  onProfitPercentChange: (value: number) => void;
};

const Component = ({ profitPercent, onProfitPercentChange }: Props) => {
  const [localProfitPercent, setLocalProfitPercent] = useState(profitPercent);

  const setProfitPercent = useCallback(
    debounce((value: number) => onProfitPercentChange(value), 300),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handleProfitPercentChange = (event: React.ChangeEvent<{}>, newValue: number | number[]) => {
    setLocalProfitPercent(Array.isArray(newValue) ? newValue[0] : newValue);
  };

  useEffect(() => {
    setProfitPercent(localProfitPercent);
  }, [localProfitPercent, setProfitPercent]);

  return (
    <div className={cn(CLASS_NAME)}>
      <div className={cn(`${CLASS_NAME}__field`, `${CLASS_NAME}__slider`)}>
        <h3 className={cn(`${CLASS_NAME}__field-title`)}>{`Profit percent: ${localProfitPercent}`}</h3>
        <Slider value={localProfitPercent} onChange={handleProfitPercentChange} aria-labelledby="continuous-slider" />
      </div>
    </div>
  );
};

export const Filter = memo(Component);
