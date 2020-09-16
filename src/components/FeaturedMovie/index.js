// import React components
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// importing services
import Tmdb from '../../services/Tmdb';

// import styles
import { Container, Name, Info, Rating, Year, Seasons, Description, Buttons, Genres } from './styles';

// import components 
import DialogInfo from '../DialogInfo';

// import icons from material-ui
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const FeaturedMovie = ({item, type}) => {
    

    return(
        <Container 
        backgroundSize='cover'
        backgroundPosition='center'
        backgroundImage={`url(https://image.tmdb.org/t/p/original${item.backdrop_path})`}
        >
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <Name>{item.original_name}</Name>
                    <Info>
                        <Rating>{item.vote_average * 10}% relevante</Rating>
                        <Year>{(new Date(item.first_air_date)).getFullYear()}</Year>
                        <Seasons>{item.number_of_seasons} Temporada{item.number_of_seasons !== 1 ? 's' : ''}</Seasons>
                    </Info>
                    <Description>{ (item.overview.length >= 150) ? item.overview.slice(0, 145).concat("...") : item.overview }</Description>
                    <Buttons>
                        <Link className="featured--watchbutton" to={`trailer/${type}/${item.id}`}>{(<PlayArrowIcon className="play-icon"/>)} Assistir</Link>
                        <DialogInfo buttonClass="featured--mylistbutton" type={type} itemId={item.id} >{(<InfoOutlinedIcon className="info-icon"/>)} Mais Informações</DialogInfo>
                    </Buttons>
                    <Genres><strong>Gêneros:</strong> {item.genres.map(item => item.name).join(', ')}</Genres>
                </div>
            </div>
        </Container>
    )
}
export default FeaturedMovie;