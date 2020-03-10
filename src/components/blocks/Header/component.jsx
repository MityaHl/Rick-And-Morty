import React from 'react'
import { css } from 'aphrodite'

import HeaderTitle from './HeaderTitle'
import HeaderMenu from './HeaderMenu'

import styles from './styles'

const Header = () => (
  <div className={css(styles.header)}>
    <HeaderTitle />
    <HeaderMenu />
  </div>
)

export default Header
