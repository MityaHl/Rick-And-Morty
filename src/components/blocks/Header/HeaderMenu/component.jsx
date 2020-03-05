import React from 'react';
import { css } from 'aphrodite'
import { Link } from 'react-router-dom'

import styles from './styles'

const HeaderMenu = () => (
  <div className={css(styles.headerMenu)}>
    <Link to="episodes" className={css(styles.link)}> <p>Episodes</p> </Link>
    <Link to="" className={css(styles.link)}> <p>Locations</p> </Link>
    <Link to="/characters" className={css(styles.link)}> <p>Characters</p> </Link>
  </div>
)

export default  HeaderMenu