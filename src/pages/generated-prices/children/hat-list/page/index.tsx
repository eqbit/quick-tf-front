import React, { memo } from 'react';
import classNamesBind from 'classnames/bind';
import { Container } from '../../../../../components/ui/container';
import styles from './index.module.scss';
import { ConnectedHatList } from '../components/connected-hat-list';

const cn = classNamesBind.bind(styles);
const CLASS_NAME = 'page-layout';

type Props = {
  name: string;
};

const Layout = ({ name }: Props) => {
  return (
    <Container>
      <div className={cn(CLASS_NAME)}>
        <ConnectedHatList name={name}/>
      </div>
    </Container>
  )
};

export const GeneratedPricesListPageLayout = memo(Layout);
