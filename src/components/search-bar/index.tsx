import React, { memo, useEffect, useRef } from 'react';
import classNamesBind from 'classnames/bind';
import styles from './index.module.scss';

const cn = classNamesBind.bind(styles);
const CLASS_NAME = 'search-bar';

type Props = {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
};

const Component = ({ onChange, value, placeholder }: Props) => {
  const handleChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    onChange(event.currentTarget.value);
  };

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref?.current?.focus();
  }, [ref]);

  return (
    <input
      ref={ref}
      type="text"
      className={cn(CLASS_NAME)}
      onChange={handleChange}
      placeholder={placeholder}
      value={value}
    />
  )
};

export const SearchBar = memo(Component);
