const API_KEY = '0e0aeac00f34d1d256c5b3fbc93db04a';
const API_BASE = 'https://api.themoviedb.org/3';

/* 
    -originais da netflix
    -trendig
    -top rated
    -action
    -comedy
    -horror
    -romace
    -documentary
*/




const basicFetch = async (endpoint) => {
    const request = await fetch(`${API_BASE}${endpoint}language=pt-BR&api_key=${API_KEY}`);
    const json = await request.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais da Netflix',
                type: 'tv',
                items: await basicFetch('/discover/tv?whith_networks=213&')
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                type: 'movie',
                items: await basicFetch('/trending/all/week?')
            },
            {
                slug: 'top_rated',
                title: 'Em Alta',
                type: 'movie',
                items: await basicFetch('/movie/top_rated?')
            },
            {
                slug: 'action',
                title: 'Ação',
                type: 'movie',
                items: await basicFetch('/discover/movie?with_genres=28&')
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                type: 'movie',
                items: await basicFetch('/discover/movie?with_genres=35&')
            },
            {
                slug: 'horror',
                title: 'Terror',
                type: 'movie',
                items: await basicFetch('/discover/movie?with_genres=27&')
            },
            {
                slug: 'romance',
                title: 'Romance',
                type: 'movie',
                items: await basicFetch('/discover/movie?with_genres=10749&')
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                type: 'movie',
                items: await basicFetch('/discover/movie?with_genres=99&')
            }
        ]
    },
    getMovieInfo: async (movieID, type) => {
        let info = {};
        if(movieID && type) {
            info = await basicFetch(`/${type}/${movieID}?`);
        }
        return info
    },
    getMovieDialog: async (movieID) => {
        return [
            {
                slug: 'movie_details',
                items: await basicFetch(`/movie/${movieID}?`)
            },
            {
                slug: 'movie_credits',
                items: await basicFetch(`/movie/${movieID}/credits?`)
            },
            {
                slug: 'movie_similar',
                items: await basicFetch(`/movie/${movieID}/similar?`)
            },
            {
                slug: 'movie_trailer',
                items: await basicFetch(`/movie/${movieID}/videos?`)
            },
        ]
    },
    getTvDialog: async (tvID) => {
        return [
            {
                slug: 'TV_details',
                items: await basicFetch(`/tv/${tvID}?`)
            },
            {
                slug: 'TV_credits',
                items: await basicFetch(`/tv/${tvID}/credits?`)
            },
            {
                slug: 'TV_similar',
                items: await basicFetch(`/tv/${tvID}/similar?`)
            },
            {
                slug: 'TV_trailer',
                items: await basicFetch(`/tv/${tvID}/videos?`)
            },
        ]
    }

    /*
    Movies:
    movie-details: https://api.themoviedb.org/3/movie/550?api_key=0e0aeac00f34d1d256c5b3fbc93db04a&language=pt-BR
    movie-credits: https://api.themoviedb.org/3/movie/550/credits?api_key=0e0aeac00f34d1d256c5b3fbc93db04a&language=pt-BR
    movie-similar: https://api.themoviedb.org/3/movie/550/similar?api_key=0e0aeac00f34d1d256c5b3fbc93db04a&language=pt-BR&page=1
    movie-trailer: https://api.themoviedb.org/3/movie/550/videos?api_key=0e0aeac00f34d1d256c5b3fbc93db04a&language=pt-BR

    TV
    
*/
}

