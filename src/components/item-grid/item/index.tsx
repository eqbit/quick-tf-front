import React, { memo, useMemo } from 'react';
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
  classes?: string[];
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
    classes,
  }: Props) => {

  let usedByClass = useMemo(() => {
    if (!classes || !classes.length) {
      return 'unknown';
    } else if (classes?.length === 1) {
      return classes[0].toLowerCase();
    } else {
      return 'multi';
    }
  }, [classes]);

  return (
    <div
      className={cn(CLASS_NAME, {
        [`${CLASS_NAME}--${quality?.toLowerCase()}`]: Boolean(quality),
        [`${CLASS_NAME}--large`]: Boolean(secondPrice),
        [`${CLASS_NAME}--extra-large`]: Boolean(thirdPrice),
      })}
    >
      <h4 className={cn(`${CLASS_NAME}__name`)}>
        <span>{effectName || name}</span>
        {' '}
        <span>({usedByClass})</span>
      </h4>

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
        <span className={cn(`${CLASS_NAME}__price`, `${CLASS_NAME}__price--second`)}>
          {secondPrice}
        </span>
      )}

      {Boolean(thirdPrice) && (
        <span className={cn(`${CLASS_NAME}__price`, `${CLASS_NAME}__price--third`)}>
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
