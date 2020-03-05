import React from 'react'

import Lists from './Lists'
import OneCharacter from './OneCharacter'

const CharactersPage = ({ character }) => {
  return (
    <div>
      <Lists />
      {character.location && <OneCharacter />}
    </div>
  )
}

export default CharactersPage
