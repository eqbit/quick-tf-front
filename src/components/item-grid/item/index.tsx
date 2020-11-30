import React, { memo } from 'react';
import classNamesBind from 'classnames/bind';
import styles from './index.module.scss';

const cn = classNamesBind.bind(styles);
const CLASS_NAME = 'item';

type Props = {
  name: string;
  imageUrl: string;
  price: string;
  effectName?: string;
  effectImg?: string;
};

const Component = ({ name, imageUrl, price, effectName, effectImg }: Props) => {
  return (
    <div className={cn(CLASS_NAME)}>
      <h4 className={cn(`${CLASS_NAME}__name`)}>{effectName || name}</h4>
      {
        Boolean(effectImg) && (
          <div
            className={cn(`${CLASS_NAME}__img-wrapper`, `${CLASS_NAME}__img-wrapper--effect`)}
          >
            <img
              className={cn(`${CLASS_NAME}__img`)}
              src={effectImg}
              alt={effectName}
            />
          </div>
        )
      }
      <div className={cn(`${CLASS_NAME}__img-wrapper`)}>
        <img
          className={cn(`${CLASS_NAME}__img`)}
          src={imageUrl}
          alt={name}
        />
      </div>
      <span className={cn(`${CLASS_NAME}__price`)}>
          {price}
        </span>
    </div>
  )
};

export const Item = memo(Component);
