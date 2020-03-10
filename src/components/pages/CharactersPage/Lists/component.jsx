import React, { useEffect } from 'react'
import { css } from 'aphrodite'

import styles from './styles'

const Lists = ({ list, nextPage, putOneCharacter, prevPage, getNextPageCharacters, getLastPageCharacters }) => {
  const onGetNextPageCharacters = () => {
    getNextPageCharacters(nextPage)
  }

  const onGetLastPageCharacters = () => {
    getLastPageCharacters(prevPage)
  }

  return (
    <div className={css(styles.lists)}>
      {
        list[0] && (
          <div className={css(styles.listBlock)}>
            {
              list.map((item, index) => (
                <div
                  className={css(styles.character)}
                  key={item.id}
                  onClick={() => {
                    putOneCharacter(item)
                  }}
                >
                  <div className={css(styles.imageBlock)}>
                    <img className={css(styles.image)} src={item.image} alt="" />
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
        <button className={css(styles.button)} onClick={onGetLastPageCharacters}>Previous</button>
        <div className={css(styles.numPage)}>
          {
            nextPage !== undefined ? nextPage.slice(48) - 1 : 1
          }
        </div>
        <button className={css(styles.button)} onClick={onGetNextPageCharacters}>Next</button>
      </div>
    </div>
  )
}

export default Lists
