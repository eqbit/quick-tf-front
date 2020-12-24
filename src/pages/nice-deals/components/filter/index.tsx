import React, { memo, useCallback, useEffect, useState } from 'react';
import styles from './index.module.scss';
import classNamesBind from 'classnames/bind';
import Slider from '@material-ui/core/Slider';
import { debounce } from 'lodash-es';
import { SEARCH_DEBOUNCE } from '../../../../config/constants';
import { SearchBar } from '../../../../components/search-bar';

const CLASS_NAME = 'filter';
const cn = classNamesBind.bind(styles);

type Props = {
  profitPercent: number;
  onProfitPercentChange: (value: number) => void;
  onDepthChange: (value: number) => void;
  searchQuery: string;
  onSearch: (value: string) => void;
};

const Component = (
  {
    profitPercent,
    onProfitPercentChange,
    onDepthChange,
    onSearch,
    searchQuery,
  }: Props) => {
  const [localProfitPercent, setLocalProfitPercent] = useState(profitPercent);
  const [localDepth, setLocalDepth] = useState(12);

  const setProfitPercent = useCallback(
    debounce((value: number) => onProfitPercentChange(value), SEARCH_DEBOUNCE),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handleProfitPercentChange = (event: React.ChangeEvent<{}>, newValue: number | number[]) => {
    setLocalProfitPercent(Array.isArray(newValue) ? newValue[0] : newValue);
  };

  useEffect(() => {
    setProfitPercent(localProfitPercent);
  }, [localProfitPercent, setProfitPercent]);

  const setDepth = useCallback(
    debounce((value: number) => onDepthChange(value), SEARCH_DEBOUNCE),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handleDepthChange = (event: React.ChangeEvent<{}>, newValue: number | number[]) => {
    setLocalDepth(Array.isArray(newValue) ? newValue[0] : newValue);
  };

  useEffect(() => {
    setDepth(localDepth);
  }, [localDepth, setDepth]);

  return (
    <div className={cn(CLASS_NAME)}>
      <div className={cn(`${CLASS_NAME}__field`, `${CLASS_NAME}__search`)}>
        <h3 className={cn(`${CLASS_NAME}__field-title`)}>Search by name</h3>
        <SearchBar value={searchQuery} onChange={onSearch}/>
      </div>

      <div className={cn(`${CLASS_NAME}__field`, `${CLASS_NAME}__slider`)}>
        <h3 className={cn(`${CLASS_NAME}__field-title`)}>{`Profit percent: ${localProfitPercent}%`}</h3>
        <Slider value={localProfitPercent} onChange={handleProfitPercentChange}/>
      </div>

      <div className={cn(`${CLASS_NAME}__field`, `${CLASS_NAME}__slider`)}>
        <h3 className={cn(`${CLASS_NAME}__field-title`)}>
          {`Depth: ${localDepth} ${localDepth === 1 ? 'hour' : 'hours'}`}
        </h3>
        <Slider min={1} max={48} value={localDepth} onChange={handleDepthChange}/>
      </div>
    </div>
  );
};

export const Filter = memo(Component);
