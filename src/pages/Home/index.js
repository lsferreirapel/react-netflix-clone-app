// importing react components
import React, { useEffect, useState } from 'react';

// import services
import Tmdb from '../../services/Tmdb';

// importing page components
// import DialogInfo from '../../components/DialogInfo';
import Header from '../../components/Header';
import FeaturedMovie from '../../components/FeaturedMovie';
import MovieRow from '../../components/MovieRow';
import Footer from '../../components/Footer';

// importing styles
import { Page, MoviesList, Loading } from './styles';

// importing loading gif
import LoadingGif from '../../assets/img/loading.gif'

function Home() {
  
  // adding states
  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);
  const [headerState, setHeaderState] = useState("transparent"); // transparent or black(#141414)
  
  

  useEffect(() => {
    const loadAll = async () => {
      // Get all movies/series list
      let list = await Tmdb.getHomeList();
      console.log(list);
      setMovieList(list);

      // Get the feature movie data
      let orginals = list.filter(item => item.slug === "originals");
      let randomChosen = Math.floor(Math.random() * (orginals[0].items.results.length -1))
      let chosen = orginals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      console.log(chosenInfo);
      setFeatureData(chosenInfo);

    }

    loadAll();
  }, []);

  useEffect (() => {
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setHeaderState("#141414");
      }
      else {
        setHeaderState("transparent");
      } 
    }

    window.addEventListener('scroll', scrollListener);
      
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return (
    <Page>
      
      <Header backgroundState={headerState}/>

      {featureData && 
        <FeaturedMovie item={featureData} type="tv" />
      }
      
      {(movieList.length) ? (
        <>
        <MoviesList>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} type={item.type}/>
        ))}
        </MoviesList>

        <Footer />
        </>
      ) : (
          <Loading>
            <img src={LoadingGif} alt="loading"></img>
          </Loading>
      ) }

      
      
    </Page>
  )
}

export default Home;