import React from 'react'
import { css } from 'aphrodite'
import MoonLoader from 'react-spinners/MoonLoader'

import styles from './styles'

const Spinner = () => (
  <div className={css(styles.spinner)}>
    <MoonLoader />
  </div>
)

export default Spinner
