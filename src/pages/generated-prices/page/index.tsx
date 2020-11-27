import React, { memo } from 'react';
import classNamesBind from 'classnames/bind';
import { Container } from '../../../components/ui/container';
import styles from './index.module.scss';
import { ConnectedBasePrices } from '../components/connected-base-prices';

const cn = classNamesBind.bind(styles);
const CLASS_NAME = 'page-layout';

const Layout = () => {
  return (
    <Container>
      <div className={cn(CLASS_NAME)}>
        <ConnectedBasePrices/>
      </div>
    </Container>
  )
};

export const GeneratedPricesPageLayout = memo(Layout);
