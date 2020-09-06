import React from 'react';

import { About, AboutInfo, Director, AboutCast, AboutGenres, AboutScript, AboutTags } from './styles';

const DialogFooter = () => (
    <About>
        <p className="sugestion-title"> Sobre Fight Club</p>
        <AboutInfo>
            <Director>
            <span className="tag-name">Direção: </span>
            <a>David Fincher</a>
            </Director>
            <AboutCast>
            <span className="tag-name">Elenco: </span>
            <a>Edward Norton, </a>
            <a>Brad Pitt, </a>
            <a>Helena Bonham Carter, </a>
            <a>Meat Loaf, </a>
            </AboutCast>
            <AboutScript>
            <span className="tag-name">Roteiro: </span>
            <a>Jim Uhls, </a>
            <a>Chuck Palahniuk</a>
            </AboutScript>
            <AboutGenres>
            <span className="tag-name">Gêneros: </span>
            <a>Drama</a>
            </AboutGenres>
            <AboutTags>
            <span className="tag-name">Tags: </span>
            <a>Má conduta, </a>
            <a>Caos, </a>
            <a>Sabão, </a>
            </AboutTags>
        </AboutInfo>
    </About>
);

export default DialogFooter;