import React, { memo, useCallback, useEffect, useState } from 'react';
import classNamesBind from 'classnames/bind';
import { RegisteredListing } from '../../../../../../../../api/requests/listings/types';
import { Charts } from './components/charts';
import styles from './index.module.scss';
import { UserInfoResponse } from '../../../../../../../../api/requests/user-info/types';
import { itemInfoRequest } from '../../../../../../../../api/requests/items';
import { getEffectIndex } from '../../../../../../../../utils/effects';

const CLASS_NAME = 'view';
const cn = classNamesBind.bind(styles);

type Props = {
  name: string;
  quality: string;
  effect?: string;
  registeredListings: RegisteredListing[];
};

const Component = ({ registeredListings = [], name, effect }: Props) => {
  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    itemInfoRequest(name).then((response) => setImgSrc(response?.data.image_url || ''));
  }, [name]);

  const handleChartPointClick = useCallback((user: UserInfoResponse) => {
    console.log(user);
  }, []);

  const bptfHatLink = `https://backpack.tf/classifieds?item=${
    name
  }&quality=5&tradable=1&craftable=1&australium=-1&particle=${
    effect ? getEffectIndex(effect) : ''
  }&killstreak_tier=0`;

  return (
    <div className={cn(CLASS_NAME)}>
      <div className={cn(`${CLASS_NAME}__info`)}>
        <a
          className={cn(`${CLASS_NAME}__link`)}
          href={bptfHatLink} target="_blank"
          rel="noreferrer noopener"
        >
          <h1 className={cn(`${CLASS_NAME}__page-title`)}>{`${effect} ${name}`}</h1>
        </a>
        <a
          className={cn(`${CLASS_NAME}__link`)}
          href={bptfHatLink} target="_blank"
          rel="noreferrer noopener"
        >

          <div className={cn(`${CLASS_NAME}__img`)}>
            <img src={imgSrc} alt=""/>
          </div>
        </a>
      </div>
      <div className={cn(`${CLASS_NAME}__charts`)}>
        <Charts
          registeredListings={registeredListings}
          onPointClick={handleChartPointClick}
        />
      </div>
    </div>
  )
};

export const HatDetailView = memo(Component);
