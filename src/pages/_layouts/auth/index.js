import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';

export default function Authlayout({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}

Authlayout.propTypes = {
  children: PropTypes.element.isRequired,
};
