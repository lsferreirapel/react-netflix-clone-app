import React from 'react';

import { MainInfo, RateInfo, Description,  FilmInfo, Cast, Genres, Tags } from './styles';

const DialogDescription = ({item, credits, type='tv'}) => {
    console.log("description", item);
    console.log('credits: ', credits);

    const durationSelector = () => {
        if(type === 'tv') {
            return `${item?.items?.number_of_seasons} temporada${item?.items?.number_of_seasons != 1 ? 's' : ''}`
        }    
        else  {
            return `${item?.items?.runtime / 60}h ${item?.items?.runtime % 60}min`
        }
    }

    return(
    <MainInfo>
        <RateInfo>
            <span className="rate">{item?.items?.vote_average * 10}% relevante</span>
            <div className="year" >{new Date(item?.items?.first_air_date).getFullYear()}</div>
            <span className="duration">{durationSelector()}</span> 
            <Description>
                <p>{item?.items?.overview}</p>
            </Description>
        </RateInfo>              
        <FilmInfo>
            <Cast>
                <span className="name">Elenco: </span>
                {credits?.items?.cast?.filter((item, index) => index < 4)?.map((actor, key) => (<a key={key}>{actor.name}, </a>))}
                <a className="seemore">mais</a>
            </Cast>
            <Genres>
                <span className="name">Gêneros: </span>
                {item?.items?.genres?.map((genre, key) => (<a key={key}>{genre.name}, </a>))}
            </Genres>
            <Tags>
                <span className="name">Tags: </span>
                <a className="seemore">mais</a>
            </Tags>
        </FilmInfo>
    </MainInfo>
)};

export default DialogDescription;