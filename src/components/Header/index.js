// import react lib
import React from 'react';
import { Link } from 'react-router-dom';

import NotificationsIcon from '@material-ui/icons/Notifications';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

// import styles
import { Container, PrimaryNavegation, Logo, Nav, List, NavItem, SecondaryNavegation, User  } from './styles';

const Header = ({backgroundState}) => (
    <Container background={backgroundState}>
        <PrimaryNavegation >
            <Logo >
                <img as={Link} to="/" src="https://fontmeme.com/permalink/200902/d264b7010f802c033b5fe5f3e71b9ecb.png" alt="CloneFlix logo"></img>
            </Logo>
            <Nav>
                <List>
                    <NavItem><a className="active">Início</a></NavItem>
                    <NavItem><a>Séries</a></NavItem>
                    <NavItem><a>Filmes</a></NavItem>
                    <NavItem><a>Mais recentes</a></NavItem>
                    <NavItem><a>Minha Lista</a></NavItem>
                </List>
            </Nav>
        </PrimaryNavegation>

        


        <SecondaryNavegation>
            <SearchIcon className="search"/>
            <a className="kids">INFANTIL</a>
            <CardGiftcardIcon className="gift"/>
            <NotificationsIcon className="notification"/>
            <User>
                <img as={Link} to="/" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" alt="User icon"></img>
                <ArrowDropDownIcon className="arrow-down"/>
            </User>
        </SecondaryNavegation>
    </Container>
)

export default Header;