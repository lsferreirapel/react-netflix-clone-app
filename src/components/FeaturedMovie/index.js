// import React components
import React from 'react';

// import styles
import { Container, Name, Info, Rating, Year, Seasons, Description, Buttons, Genres } from './styles';

// import components 
import DialogInfo from '../DialogInfo';

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
                        <a className="featured--watchbutton" href={`/watch/${item.id}` }>► Assistir</a>
                        <DialogInfo buttonClass="featured--mylistbutton" type={type} itemId={item.id} >+ Mais Informações</DialogInfo>
                    </Buttons>
                    <Genres><strong>Gêneros:</strong> {item.genres.map(item => item.name).join(', ')}</Genres>
                </div>
            </div>
        </Container>
    )
}
export default FeaturedMovie;