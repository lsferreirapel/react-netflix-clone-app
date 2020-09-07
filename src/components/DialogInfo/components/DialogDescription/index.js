import React from 'react';

import { MainInfo, RateInfo, Description,  FilmInfo, Cast, Genres, Tags } from './styles';

const DialogDescription = ({item, credits, type='tv'}) => (
    <MainInfo>
        <RateInfo>
            <span className="rate">84% relevante</span>
            <div className="year" >1999</div>
            <span className="duration">{(type === 'tv')? item?.items?.number_of_seasons : (item?.items?.runtime / 60)}</span> {/* if the item is a Movie Season=runtime else Season=season */}
            <Description>
                <p>{item?.items?.overview}</p>
            </Description>
        </RateInfo>              
        <FilmInfo>
            <Cast>
            <span className="name">Elenco: </span>
            <a>Edward Norton, </a>
            <a>Brad Pitt, </a>
            <a>Helena Bonham Carter, </a>
            <a>Meat Loaf, </a>
            <a className="seemore">mais</a>
            </Cast>
            <Genres>
            <span className="name">Gêneros: </span>
            <a>Drama</a>
            </Genres>
            <Tags>
            <span className="name">Tags: </span>
            <a>Má conduta, </a>
            <a>Caos, </a>
            <a>Sabão, </a>
            <a className="seemore">mais</a>
            </Tags>
        </FilmInfo>
    </MainInfo>
);

export default DialogDescription;