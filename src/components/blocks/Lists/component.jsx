import React, { useEffect } from 'react'
import { css } from 'aphrodite'

import styles from './styles'

const Lists = ({ getCharacters, list }) => {

  useEffect(() => {
    getCharacters()
  },[])

  return (
    <div className={css(styles.lists)}>
      {
        list.info && (
          <div className={css(styles.listBlock)}>
            {
              list.results.map((item, index) => (
                <div className={css(styles.character)}>
                  <div className={css(styles.imageBlock)}>
                    <img className={css(styles.image)} src={item.image} alt=""/>
                  </div>
                  <div className={css(styles.nameBlock)}>
                    {item.name}
                  </div>
                  <div className={css(styles.listItem)}>
                    {item.species}
                  </div>
                  <div className={css(styles.listItem)}>
                    {item.status}
                  </div>
                </div>   
              ))
            }
          </div>
        )
      }
      <div className={css(styles.buttonsBlock)}>
        <button className={css(styles.button)}>Previous</button>
        <div className={css(styles.numPage)}>3</div>
        <button className={css(styles.button)}>Next</button>
      </div>
    </div>
  )
}

export default  Lists