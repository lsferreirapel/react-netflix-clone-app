// importing react components
import React from 'react';

// importing styles
import { Container, Icons } from './styles';

// importing social icons
import Netflix from '../../assets/img/icon/netflix-icon.png';
import TMDB from '../../assets/img/icon/tmdb-icon.svg';
import GitHub from '../../assets/img/icon/github-icon.png';
import Instagram from '../../assets/img/icon/intagram-icon.png';

const Footer = () => (
    <Container>
        <Icons>
            <a href="https://Netflix.com/" target="_blank" rel="noopener noreferrer"><img src={Netflix}></img></a>
            <a href="https://Themoviedb.org/" target="_blank" rel="noopener noreferrer"><img src={TMDB}></img></a>
            <a href="https://GitHub.com/lsferreirapel" target="_blank" rel="noopener noreferrer"><img src={GitHub}></img></a>
            <a href="https://Instagram.com/" target="_blank" rel="noopener noreferrer"><img src={Instagram}></img></a>
        </Icons>
        Feito com <span role="img" aria-label="heart">❤️</span> por <a>Lucas Ferreira</a><br />
        Direitos de imagem para <a>Netflix</a><br />
        Dados pegos de <a>Themoviedb.org</a>
    </Container>
)

export default Footer;