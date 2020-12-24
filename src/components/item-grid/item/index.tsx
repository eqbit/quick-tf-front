import React, { memo } from 'react';
import classNamesBind from 'classnames/bind';
import styles from './index.module.scss';

const cn = classNamesBind.bind(styles);
const CLASS_NAME = 'item';

type Props = {
  name: string;
  imageUrl: string;
  price: string;
  secondPrice?: string;
  thirdPrice?: string;
  effectName?: string;
  effectImg?: string;
  quality?: string;
  date?: string;
};

const Component = (
  {
    name,
    imageUrl,
    price,
    effectName,
    effectImg,
    quality,
    secondPrice,
    date,
    thirdPrice,
  }: Props) => {
  const isPopupNeeded = Boolean(date);

  return (
    <div className={cn(`${CLASS_NAME}__wrapper`)}>
      {isPopupNeeded && (
        <div className={cn(`${CLASS_NAME}__popup`)}>
          {Boolean(date) && (
            <div className={cn(`${CLASS_NAME}__date`)}>
              {`Listing date: ${date}`}
            </div>
          )}
        </div>
      )}
      <div
        className={cn(CLASS_NAME, {
          [`${CLASS_NAME}--${quality?.toLowerCase()}`]: Boolean(quality),
          [`${CLASS_NAME}--large`]: Boolean(secondPrice),
        })}
      >
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
            alt=""
          />
        </div>

        <span className={cn(`${CLASS_NAME}__price`)}>
          {price}
        </span>

        {Boolean(secondPrice) && (
          <span className={cn(`${CLASS_NAME}__second-price`)}>
            {secondPrice}
          </span>
        )}

        {Boolean(thirdPrice) && (
          <span className={cn(`${CLASS_NAME}__third-price`)}>
            {thirdPrice}
          </span>
        )}
      </div>
    </div>
  )
};

export const Item = memo(Component);
