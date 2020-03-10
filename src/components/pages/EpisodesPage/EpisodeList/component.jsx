import React, { useEffect } from 'react'
import { css } from 'aphrodite'

import styles from './styles'

const EpisodeList = ({ getEpisodes, nextPage, list, putOneEpisode, getAnotherPageEpisodes, prevPage }) => {
  useEffect(() => {
    getEpisodes()
  }, [])

  const onGetAnotherPageEpisodes = () => {
    getAnotherPageEpisodes(nextPage)
  }

  return (
    <div className={css(styles.lists)}>
      <div className={css(styles.listBlock)}>
        {
          list !== undefined && list.map((item, index) => (
            <div
              key={item.id}
              className={css(styles.episode)}
              onClick={() => {
                putOneEpisode(item)
              }}
            >
              <div className={css(styles.titleBlock)}>
                {item.name}
              </div>
              <div className={css(styles.dateBlock)}>
                {item.air_date}
              </div>
            </div>
          ))
        }
      </div>
      <div className={css(styles.buttonsBlock)}>
        <button
          className={css(styles.button)}
          onClick={() => {
            getAnotherPageEpisodes(prevPage)
          }}
        >
          Previous
        </button>
        <div className={css(styles.numPage)}>
          {
            (nextPage !== undefined && nextPage !== '') ? nextPage.slice(45) - 1 : 1
          }
        </div>
        <button
          className={css(styles.button)}
          onClick={() => {
            getAnotherPageEpisodes(nextPage)
          }}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default EpisodeList
