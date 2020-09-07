import React from 'react';

/* Dialog about style */
import { Sugestion, List, ListCard, SectionDivider } from './styles';

//importing icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const DialogSimilar = (similar) => {
    console.log("similar:", similar);
    return(
    <>
        <Sugestion>
            <p className="sugestion-title">Títulos semelhantes</p>
            <List>
                {similar?.item?.items?.results?.map((item, key) => (
                    <ListCard key={key} background={(item.backdrop_path)? `https://image.tmdb.org/t/p/original${item.backdrop_path}` : `https://image.tmdb.org/t/p/original${item.poster_path}`}>
                        <div className="list-card-image">
                            <span className="image-duration">1h 20min</span>
                            <span className="image-name">{item.name}</span>
                        </div>
                        <div className="list-card-info">
                            <span className="card-info-rate">{item.vote_average * 10}% relevante</span>
                            <div className="card-info-year">{(new Date(item.first_air_date)).getFullYear()}</div>
                        </div>
                        <p className="list-card-description">{(item.overview.length > 150)? item.overview.slice(0, 145).concat("...") : item.overview}</p>
                    </ListCard>
                ))}
                
            </List>
        </Sugestion>
        <SectionDivider>
            <button className="arrow-button"><ExpandLessIcon fontSize="large"/></button>
        </SectionDivider>
    </>
)};

export default DialogSimilar;