import React, { memo } from 'react';
import classNamesBind from 'classnames/bind';
import styles from './index.module.scss';
import { ItemLink } from './types';
import { Link } from 'react-router5';

const cn = classNamesBind.bind(styles);
const CLASS_NAME = 'item';

type Props = {
  name: string;
  imageUrl: string;
  price?: string;
  secondPrice?: string;
  thirdPrice?: string;
  effectName?: string;
  effectImg?: string;
  quality?: string;
};

type PropsWithLink = Props & { link: ItemLink; };

const Component = (
  {
    name,
    imageUrl,
    price,
    effectName,
    effectImg,
    quality,
    secondPrice,
    thirdPrice,
  }: Props) => {
  return (
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

      {Boolean(price) && (
        <span className={cn(`${CLASS_NAME}__price`)}>
          {price}
        </span>
      )}

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
  )
};

export const ItemWithLink = ({ link, ...props }: PropsWithLink) => {
  return link.isExternal ? (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Component {...props} />
    </a>
  ) : (
    <Link
      routeName={link.routeName}
      routeParams={link.routeParams}
    >
      <Component {...props} />
    </Link>
  )
};

export const Item = memo(Component);
