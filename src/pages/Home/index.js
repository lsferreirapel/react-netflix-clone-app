import React, { useEffect, useState } from 'react';

// import services
import Tmdb from '../../services/Tmdb';

// import components
import MovieRow from '../../components/MovieRow';
import FeaturedMovie from '../../components/FeaturedMovie.js'

// import styles
import { Page, MoviesList } from './styles';

function Home() {
    
  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      // Get all movies/series list
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // Get the feature movie data
      let orginals = list.filter(item => item.slug === "originals");
      let randomChosen = Math.floor(Math.random() * (orginals[0].items.results.length -1))
      let chosen = orginals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeatureData(chosenInfo);

    }

    loadAll();
  }, []);

  return (
    <Page>

      {featureData && 
        <FeaturedMovie item={featureData}/>
      }
      
      <MoviesList>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </MoviesList>
    </Page>
  )
}

export default Home;