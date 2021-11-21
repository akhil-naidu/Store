import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import { padStart } from 'lodash';

import { animeReducer } from '../store/reducer';
import { initAnimeState } from '../store/initState';

const Body = () => {
  const [animeState, animeDispatch] = useReducer(animeReducer, initAnimeState);

  console.log(animeState);

  useEffect(() => {
    const getAnime = async () => {
      try {
        const response = await axios.get(
          'https://api.jikan.moe/v3/anime/1/episodes',
        );

        animeDispatch({ type: 'setDetails', payload: response.data });
      } catch (error) {
        console.error(error);
      }

      try {
        const response = await axios.get(
          'https://api.jikan.moe/v3/anime/1/pictures',
        );

        animeDispatch({ type: 'setImages', payload: response.data });
      } catch (error) {
        console.error(error);
      }
    };

    getAnime();
  }, []);

  return (
    <React.Fragment>
      <div>
        <img src={animeState.images?.pictures?.[0].small} alt='Anime Title' />
      </div>
      <div>
        {animeState.details.episodes?.map((episode) => (
          <div key={episode.episode_id}>
            {`Episode ${
              episode.episode_id <= 9
                ? padStart(episode.episode_id, 2, 0)
                : episode.episode_id
            }: ${episode.title}`}
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Body;
