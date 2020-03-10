import React from 'react'

import EpisodeList from './EpisodeList'
import OneEpisode from './OneEpisode'

const EpisodesPage = ({ episode }) => {
  return (
    <div>
      <EpisodeList />
      {episode.name && <OneEpisode />}
    </div>
  )
}

export default EpisodesPage
