import React from 'react';
import { connect } from 'react-redux';
import { useRoute } from 'react-router5';

const Page = () => {
  const { route: { params: { name }} } = useRoute();

  return (
    <div>{name}</div>
  );
};

export const HatPage = connect(() => ({}), {})(Page);
