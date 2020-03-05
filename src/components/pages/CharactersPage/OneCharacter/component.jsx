import React, { useEffect, useCallback } from 'react'
import { css } from 'aphrodite'

import styles from './styles'

const OneCharacter = ({ character, characterEpisodes, getOneCharacterEpisodes }) => {

  const episodes = useCallback(() => {
    return character.episode.map((item, index) => {
      return item = item.slice(item.lastIndexOf('/') + 1)
    })
  })

  useEffect(() => {
    const arrOfEpisodes = episodes()
    getOneCharacterEpisodes(arrOfEpisodes)
  }, [])

  useEffect(() => {
    const arrOfEpisodes = episodes()
    getOneCharacterEpisodes(arrOfEpisodes)
  })

  return (
    <div className={css(styles.oneCharacter)}>
      <div className={css(styles.oneCharacterBlock)}>
        <div className={css(styles.mainInfo)}>
          <div className={css(styles.profileImage)}>
            <img className={css(styles.image)} src={character.image} alt=""/>
          </div>
          <div className={css(styles.profileInfo)}>
            <div className={css(styles.nameBlock)}>
              {character.name}
            </div>
            <div className={css(styles.listItem)}>
              {`Species: ${character.species}`}
            </div>
            <div className={css(styles.listItem)}>
              {`Status: ${character.status}`}
            </div>
            <div className={css(styles.listItem)}>
              {`Gender: ${character.gender}`}
            </div>
            <div className={css(styles.listItem)}>
              {`Origin: ${character.origin && character.origin.name}`}
            </div>
            <div className={css(styles.listItem)}>
              {`Location: ${character.origin && character.location.name}`}
            </div>
          </div>
        </div>
        <div className={css(styles.episodes)}>
          <div className={css(styles.episodesBlockTitle)}>
            Episodes
          </div>
          <div className={css(styles.episodesList)}>
            {
              characterEpisodes.map((episode, index) => (
                <div className={css(styles.oneEpisode)}>
                  {episode.name}
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default OneCharacter