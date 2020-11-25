import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRegisteredTradesAction } from '../../redux/registered-trades-module';

type Props = {
  fetchTrades: () => void;
};

const HomePageComponent = ({ fetchTrades }: Props) => {
  useEffect(() => {
    fetchTrades();
  }, [fetchTrades]);
  return <div>Home</div>;
};

export const HomePage = connect(() => ({}), {
  fetchTrades: fetchRegisteredTradesAction,
})(HomePageComponent);
