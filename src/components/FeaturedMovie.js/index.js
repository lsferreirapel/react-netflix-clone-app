import React from 'react';

// import styles
import { Container, Name, Info, Rating, Year, 
    Seasons, Description, Buttons, Genres } from './styles'

const FeaturedMovie = ({item}) => (
    <Container 
    backgroundSize='cover'
    backgroundPosition='center'
    backgroundImage={`url(https://image.tmdb.org/t/p/original${item.backdrop_path})`}
    >
        <div className="featured--vertical">
            <div className="featured--horizontal">
                <Name>{item.original_name}</Name>
                <Info>
                    <Rating>{item.vote_average} pontos</Rating>
                    <Year>{(new Date(item.first_air_date)).getFullYear()}</Year>
                    <Seasons>{item.number_of_seasons} Temporada{item.number_of_seasons !== 1 ? 's' : ''}</Seasons>
                </Info>
                <Description>{ (item.overview.length >= 150) ? item.overview.slice(0, 145).concat("...") : item.overview } {(item.overview.length >= 145) ? (<a href="/">Ver mais.</a>) : ""}</Description>
                <Buttons>
                    <a className="featured--watchbutton" href={`/watch/${item.id}` }>► Assistir</a>
                    <a className="featured--mylistbutton" href={`/list/add/${item.id}`}>+ Minha Lista</a>
                </Buttons>
                <Genres><strong>Gêneros:</strong> {item.genres.map(item => item.name).join(', ')}</Genres>
            </div>
        </div>
    </Container>
)

export default FeaturedMovie;