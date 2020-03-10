import React, { useEffect } from 'react'

import Lists from './Lists'
import Spinner from '@/components/blocks/Spinner'
import OneCharacter from './OneCharacter'

const CharactersPage = ({ character, allCharacters, getCharacters }) => {
  useEffect(() => {
    getCharacters()
  }, [])

  return (
    <div>
      {allCharacters ? <Lists /> : <Spinner />}
      {character.location && <OneCharacter />}
    </div>
  )
}

export default CharactersPage
