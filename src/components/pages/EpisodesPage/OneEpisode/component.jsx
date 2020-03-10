import React, { useEffect, useCallback } from 'react'
import { css } from 'aphrodite'

import Spinner from '@/components/blocks/Spinner'

import styles from './styles'

const OneEpisode = ({ episode, oneEpisodeCharacters, getOneEpisodeCharacters }) => {
  const characters = useCallback(() => {
    return episode.characters.map((item, index) => {
      return item.slice(item.lastIndexOf('/') + 1)
    })
  })

  useEffect(() => {
    const arrOfCharacters = characters()
    getOneEpisodeCharacters(arrOfCharacters)
  }, [])

  return (
    <div className={css(styles.oneEpisode)}>
      <div className={css(styles.oneEpisodeBlock)}>
        <div className={css(styles.title)}>
          {episode.name}
        </div>
        <div className={css(styles.date)}>
          {episode.air_date}
        </div>
        <div className={css(styles.charactersTitle)}>
          Characters
        </div>
        <div className={css(styles.charactersList)}>
          {
            oneEpisodeCharacters
              ? oneEpisodeCharacters.map((character, index) => (
                <div className={css(styles.oneCharacter)} key={character.id}>
                  <div className={css(styles.imageBlock)}>
                    <img src={character.image} className={css(styles.image)} alt="" />
                  </div>
                  <div className={css(styles.nameBlock)}>
                    {character.name}
                  </div>
                  <div className={css(styles.listItem)}>
                    {character.species}
                  </div>
                  <div className={css(styles.listItem)}>
                    {character.status}
                  </div>
                </div>
              ))
              : (<Spinner />)
          }
        </div>
      </div>
    </div>
  )
}

export default OneEpisode
