import React from 'react';
import { css } from 'aphrodite'

import styles from './styles'

const HeaderTitle = () => (
  <div className={css(styles.titleDiv)}>
    <div className={css(styles.titleText)}>
      Rick and Morty
    </div>
  </div>
)

export default  HeaderTitle