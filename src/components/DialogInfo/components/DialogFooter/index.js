import React from 'react';

import { About, AboutInfo, Director, AboutCast, AboutGenres, AboutScript, AboutTags } from './styles';

const DialogFooter = ({details, credits}) => {
    console.log('footer: ', details, credits);
    return(
    <About>
        <p className="sugestion-title"> Sobre {details.items.original_name}</p>
        <AboutInfo>
            <Director>
                <span className="tag-name">Direção: </span>
                {details?.items?.created_by?.map((creator, key) => (<a key={key}>{creator.name} </a>))}
            </Director>
            <AboutCast>
                <span className="tag-name">Elenco: </span>
                {credits?.items?.cast?.map((actor, key) => (<a key={key}> {actor.name},</a>))}
            </AboutCast>
            <AboutScript>
                <span className="tag-name">Roteiro: </span>
                {credits?.items?.crew?.filter((employee) => employee.department === "Writing")?.map((employee, key) => (<a key={key}>{employee.name}</a>))}
            </AboutScript>
            <AboutGenres>
                <span className="tag-name">Gêneros: </span>
    {details?.items?.genres?.map((genre, key) => (<a key={key}> {genre.name},</a>))}
            </AboutGenres>
            <AboutTags>
                <span className="tag-name">Tags: </span>
            </AboutTags>
        </AboutInfo>
    </About>
)};

export default DialogFooter;