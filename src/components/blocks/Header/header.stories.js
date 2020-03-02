import React from 'react';
import { css } from 'aphrodite'

import styles from './styles'

export default {
  title: 'Header',
};

export const Header = () => (
  <div className={css(styles.header)}>
    Rick and Morty
  </div>
)
