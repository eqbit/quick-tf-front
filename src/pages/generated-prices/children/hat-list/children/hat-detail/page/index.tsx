import React, { memo } from 'react';
import classNamesBind from 'classnames/bind';
import { Container } from '../../../../../../../components/ui/container';
import styles from './index.module.scss';
import { ConnectedHatDetail } from '../components/connected-hat-detail';

const cn = classNamesBind.bind(styles);
const CLASS_NAME = 'page-layout';

type Props = {
  name: string;
  quality: string;
  effect?: string;
};

const Layout = ({ name, quality, effect }: Props) => {
  return (
    <Container>
      <div className={cn(CLASS_NAME)}>
        <ConnectedHatDetail name={name} quality={quality} effect={effect}/>
      </div>
    </Container>
  )
};

export const HatDetailPageLayout = memo(Layout);
