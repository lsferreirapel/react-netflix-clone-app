import React, { useEffect, useState } from 'react';

import Tmdb from '../../services/Tmdb';

function Home() {
    
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      // Get all movies/series list
      let list = await Tmdb.getHomeList();
      console.log(list);
      setMovieList(list);
    }

    loadAll();

  }, []);

  return (
    <div className="page">
      <section className="lists">
        {movieList.map((item, key) => (
          <div>
            {item.title}
          </div>
        ))}

      </section>

      {/* <Header /> */}
      {/* <Destaque /> */}
      {/* <ContentLists /> */}
      {/* <Footer /> */}
    </div>
  )
}

export default Home;