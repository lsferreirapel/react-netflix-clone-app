import React from 'react';

import { MainInfo, RateInfo, Description,  FilmInfo, Cast, Genres, Tags } from './styles';

const DialogDescription = () => (
    <MainInfo>
        <RateInfo>
            <span className="rate">84% relevante</span>
            <div className="year" >1999</div>
            <span className="duration">2h 19m</span> {/* if the item is a Movie Season=runtime else Season=season */}
            <Description>
            <p>Um homem deprimido que sofre de insônia conhece um estranho vendedor chamado Tyler Durden e se vê morando em uma casa suja depois que seu perfeito apartamento é destruído. A dupla forma um clube com regras rígidas onde homens lutam. A parceria perfeita é comprometida quando uma mulher, Marla, atrai a atenção de Tyler.</p>
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