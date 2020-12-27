import React, { memo, ReactNode } from 'react';
import classNamesBind from 'classnames/bind';
import styles from './index.module.scss';
import { ItemLink } from '../item/types';
import { Link } from 'react-router5';

const cn = classNamesBind.bind(styles);
const CLASS_NAME = 'item-with-popup';

type Props = {
  date?: string;
  bpLink?: ItemLink;
  qLink?: ItemLink;
  children: ReactNode;
};

const Component = ({ date, bpLink, qLink, children }: Props) => {
  const isPopupNeeded = Boolean(date || bpLink || qLink);

  return (
    <div className={cn(CLASS_NAME)}>
      {isPopupNeeded && (
        <div className={cn(`${CLASS_NAME}__popup`)}>
          {Boolean(date) && (
            <div className={cn(`${CLASS_NAME}__date`)}>
              {date}
            </div>
          )}

          {Boolean(bpLink || qLink) && (
            <div className={cn(`${CLASS_NAME}__links`)}>
              {Boolean(bpLink) && (
                <a
                  className={cn(`${CLASS_NAME}__link`)}
                  href={bpLink?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BPTF
                </a>
              )}

              {Boolean(qLink) && (
                <Link
                  className={cn(`${CLASS_NAME}__link`)}
                  routeName={qLink?.routeName}
                  routeParams={qLink?.routeParams}
                >
                  QTF
                </Link>
              )}
            </div>
          )}
        </div>
      )}

      {children}
    </div>
  )
};

export const ItemWithPopup = memo(Component);
