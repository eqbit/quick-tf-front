import React, { memo } from 'react';
import classNamesBind from 'classnames/bind';
import styles from './index.module.scss';

const cn = classNamesBind.bind(styles);
const CLASS_NAME = 'item';

type Props = {
  name: string;
  imageUrl: string;
  price: string;
};

const Component = ({ name, imageUrl, price }: Props) => {
  return (
    <li className={cn(CLASS_NAME)}>
      <div className={cn(`${CLASS_NAME}__item`)}>
        <h4 className={cn(`${CLASS_NAME}__name`)}>{name}</h4>
        <img
          className={cn(`${CLASS_NAME}__img`)}
          src={imageUrl}
          alt={name}
        />
        <span className={cn(`${CLASS_NAME}__price`)}>
          {price}
        </span>
      </div>
    </li>
  )
};

export const Item = memo(Component);
