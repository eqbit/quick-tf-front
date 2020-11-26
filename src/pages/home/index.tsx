import React, { memo } from 'react';
import { Container } from '../../components/ui/container';

const HomePageComponent = () => {
  return <Container><div>Home</div></Container>;
};

export const HomePage = memo(HomePageComponent);

