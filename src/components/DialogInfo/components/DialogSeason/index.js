// Importing react components
import React from 'react';

//Importing styles
import { SeasonList, SeasonHeader, EpisodeList, EpisodeItem, Index, Image, MetaData } from './styles';

export default function DialogSeason({item}) {

    console.log('seasons', item);
    return(
        <SeasonList>
            <SeasonHeader>
                <span className="section-title">Episódios</span>
                <button className="dropdown-toggle">Temporada 1</button>
            </SeasonHeader>
            <EpisodeList>
                {item?.items?.episodes?.map((item, index) => (
                    <EpisodeItem key={index}>
                        <Index>{index + 1}</Index>
                        <Image background={`https://image.tmdb.org/t/p/original${item.still_path}`}/>
                        <MetaData>
                            <div className="episode-item-title">
                                <span className="episode-title-info">{item.name}</span>
                                <span className="episode-duration">30min</span>
                            </div>
                            <p className="small-overview">{item.overview}</p>
                        </MetaData>
                    </EpisodeItem>
                ))}
                
            </EpisodeList>
        </SeasonList>
    ) 
}