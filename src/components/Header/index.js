// import react lib
import React from 'react';
import { Link } from 'react-router-dom';

import NotificationsIcon from '@material-ui/icons/Notifications';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

// import styles
import { Container, PrimaryNavegation, Logo, Nav, List, NavItem, SecondaryNavegation, User  } from './styles';

const Header = ({backgroundState, options=true}) => (
    <Container background={backgroundState}>
        <PrimaryNavegation >
            <Logo as={Link} to="/" >
                <img src="https://fontmeme.com/permalink/200902/d264b7010f802c033b5fe5f3e71b9ecb.png" alt="CloneFlix logo"></img>
            </Logo>
            {options ? (
                <Nav>
                    <List>
                        <NavItem><a className="active">Início</a></NavItem>
                        <NavItem><a>Séries</a></NavItem>
                        <NavItem><a>Filmes</a></NavItem>
                        <NavItem><a>Mais recentes</a></NavItem>
                        <NavItem><a>Minha lista</a></NavItem>
                    </List>
                </Nav>
            ) : ""}    
        </PrimaryNavegation>
        {options ? (
            <SecondaryNavegation>
                <SearchIcon className="search"/>
                <a className="kids">INFANTIL</a>
                <CardGiftcardIcon className="gift"/>
                <NotificationsIcon className="notification"/>
                <User as={Link} to="/login">
                    <img src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" alt="User icon"></img>
                    <ArrowDropDownIcon className="arrow-down"/>
                </User>
            </SecondaryNavegation>
        ) : ""}
        
    </Container>
)

export default Header;