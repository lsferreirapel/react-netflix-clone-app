// importing react components
import React from 'react';

// importing styles
import { Container, Icons } from './styles';

// importing social icons
import Netflix from '../../assets/img/icon/netflix-icon.png';
import TMDB from '../../assets/img/icon/tmdb-icon.svg';
import GitHub from '../../assets/img/icon/github-icon.png';
import Instagram from '../../assets/img/icon/intagram-icon.png';

export const Footer = () => (
    <Container>
        <Icons>
            <a href="https://netflix.com/" target="_blank" rel="noopener noreferrer"><img src={Netflix} alt="NetFlix logo"></img></a>
            <a href="https://themoviedb.org/" target="_blank" rel="noopener noreferrer"><img src={TMDB} alt="TMDB logo"></img></a>
            <a href="https://github.com/lsferreirapel/react-netflix-clone-app" target="_blank" rel="noopener noreferrer"><img src={GitHub} alt="GitHub logo"></img></a>
            <a href="https://instagram.com/lucsferreira.a/" target="_blank" rel="noopener noreferrer"><img src={Instagram} alt="instagram logo"></img></a>
        </Icons>
        Feito com <span role="img" aria-label="heart">❤️</span> por <a href="https://GitHub.com/lsferreirapel" target="_blank" rel="noopener noreferrer">Lucas Ferreira</a><br />
        Direitos de imagem para <a href="https://Netflix.com/" target="_blank" rel="noopener noreferrer">Netflix</a><br />
        Dados pegos de <a href="https://Themoviedb.org/" target="_blank" rel="noopener noreferrer">Themoviedb.org</a>
    </Container>
)