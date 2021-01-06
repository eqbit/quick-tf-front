import React, { memo } from 'react';
import classNamesBind from 'classnames/bind';
import { Container } from '../../../../../../../components/ui/container';
import styles from './index.module.scss';
import { ConnectedHatDetail } from '../components/connected-hat-detail';
import { UnusualPrices } from '../../../../../../../api/requests/prices/types';

const cn = classNamesBind.bind(styles);
const CLASS_NAME = 'page-layout';

type Props = {
  name: string;
  quality: string;
  effect?: string;
  prices?: UnusualPrices;
};

const Layout = (props: Props) => {
  return (
    <Container>
      <div className={cn(CLASS_NAME)}>
        <ConnectedHatDetail {...props}/>
      </div>
    </Container>
  )
};

export const HatDetailPageLayout = memo(Layout);
