import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Tmdb from '../../services/Tmdb';

import { Container, BackButton } from './styles';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const TrailerPage = (props) => {
  const [videos, setVideos] = useState(null);
  const id = props.match.params.id;
  const type = props.match.params.type;
    
  console.log(id);
  console.log(type);

  useEffect(() => {
    const loadAll = async () => {
      let list;
      if (type === 'tv') {
          list = await Tmdb.getTvVideos(id);
          setVideos(list);
          console.log('trailer', list);
      } else if(type === 'movie') {
          list = await Tmdb.getMovieVideos(id);
          setVideos(list);
          console.log('trailer', list);
      }
    }
    loadAll();
    console.log(videos);
  }, [])

  console.log()
  return(
    <Container>
      <BackButton >
        <Link to='/'><ArrowBackIcon fontSize="large" className="icon"/></Link>
      </BackButton>
      <iframe 
        className="trailer" 
        src={`https://www.youtube.com/embed/${videos?.items?.results[0]?.key}`}
        frameborder="1" 
        allow="accelerometer; autoplay; 
          encrypted-media; gyroscope; 
          picture-in-picture" 
        allowfullscreen='true'></iframe>
    </Container>
  )
}

export default TrailerPage;