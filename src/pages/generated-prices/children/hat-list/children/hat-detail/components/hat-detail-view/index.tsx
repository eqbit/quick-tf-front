import React, { memo, useCallback, useEffect, useState } from 'react';
import classNamesBind from 'classnames/bind';
import { RegisteredListing } from '../../../../../../../../api/requests/listings/types';
import { Charts } from './components/charts';
import styles from './index.module.scss';
import { itemInfoRequest } from '../../../../../../../../api/requests/items';
import { getEffectIndex } from '../../../../../../../../utils/effects';
import { userInfoRequest } from '../../../../../../../../api/requests/user-info';
import { UnusualPrices } from '../../../../../../../../api/requests/prices/types';

const CLASS_NAME = 'view';
const cn = classNamesBind.bind(styles);

type Props = {
  name: string;
  quality: string;
  effect?: string;
  registeredListings: RegisteredListing[];
  prices?: UnusualPrices;
};

const Component = (
  {
    registeredListings = [],
    name,
    effect,
    prices,
  }: Props) => {
  const [ imgSrc, setImgSrc ] = useState('');
  const [ isUserLoading, setIsUserLoading ] = useState(false);
  const [ userName, setUserName ] = useState('');
  const [ userUrl, setUserUrl ] = useState('');
  const [ userAvatar, setUserAvatar ] = useState('');

  useEffect(() => {
    itemInfoRequest(name).then((response) => setImgSrc(response?.data?.image_url || ''));
  }, [ name ]);

  const handleChartPointClick = useCallback((steamid: string) => {
    setIsUserLoading(true);

    userInfoRequest(steamid).then((response) => {
      if (response?.data) {
        setIsUserLoading(false);

        const user = response.data;

        setUserName(user.personaname);
        setUserUrl(user.profileurl);
        setUserAvatar(user.avatarfull);
      }
    });
  }, []);

  const effectIndex = effect ? getEffectIndex(effect) : '';

  const bptfHatLink = `https://backpack.tf/classifieds?item=${
    name
  }&quality=5&tradable=1&craftable=1&australium=-1&particle=${
    effectIndex
  }&killstreak_tier=0`;

  return (
    <div className={cn(CLASS_NAME)}>
      <div className={cn(`${CLASS_NAME}__info`)}>
        <h1 className={cn(`${CLASS_NAME}__page-title`)}>{`${effect} ${name}`}</h1>
        <div className={cn(`${CLASS_NAME}__data`)}>
          <a
            className={cn(`${CLASS_NAME}__link`)}
            href={bptfHatLink}
            target="_blank"
            rel="noreferrer noopener"
          >

            <div className={cn(`${CLASS_NAME}__img`)}>
              <img src={imgSrc} alt=""/>
              {Boolean(effect) && (
                <img
                  className={cn(`${CLASS_NAME}__effect-img`)}
                  src={`https://backpack.tf/images/440/particles/${effectIndex}_380x380.png`}
                  alt=""
                />
              )}
            </div>
          </a>
          {Boolean(prices) && (
            <div className={cn(`${CLASS_NAME}__details`)}>
              <div className={cn(`${CLASS_NAME}-price-item`)}>
                <div className={cn(`${CLASS_NAME}-price-item__title`)}>Suggested price</div>
                <div className={cn(`${CLASS_NAME}-price-item__value`)}>{`${prices?.suggestedPrice} keys`}</div>
              </div>

              <div className={cn(`${CLASS_NAME}-price-item`)}>
                <div className={cn(`${CLASS_NAME}-price-item__title`)}>Generated price</div>
                <div className={cn(`${CLASS_NAME}-price-item__value`)}>{`${prices?.generatedPrice} keys`}</div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={cn(`${CLASS_NAME}-charts`)}>
        <div className={cn(`${CLASS_NAME}-charts__user`)}>
          {isUserLoading
            ? <span>Loading...</span>
            : (
              <>
                {Boolean(userUrl) ? (
                  <a
                    href={userUrl}
                    className={cn(`${CLASS_NAME}-charts__user-link`)}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <div className={cn(`${CLASS_NAME}-charts__user-avatar-frame`)}>
                      <div className={cn(`${CLASS_NAME}-charts__user-avatar`)}>
                        <img src={userAvatar} alt=""/>
                      </div>
                    </div>

                    <h2 className={cn(`${CLASS_NAME}-charts__user-name`)}>{userName}</h2>
                  </a>
                ) : (
                  <div className={cn(`${CLASS_NAME}-charts__user-avatar-frame`)}>
                    <div className={cn(`${CLASS_NAME}-charts__user-avatar`)}>
                      <img src="/img/anon.webp" alt=""/>
                    </div>
                  </div>
                )}
              </>
            )}
        </div>
        <div className={cn(`${CLASS_NAME}-charts__body`)}>
          <Charts
            registeredListings={registeredListings}
            onPointClick={handleChartPointClick}
          />
        </div>
      </div>
    </div>
  )
};

export const HatDetailView = memo(Component);
