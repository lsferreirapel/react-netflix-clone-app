// import react lib
import React from 'react';
import { Link } from 'react-router-dom';

// import styles
import { Container, Logo, User } from './styles';

const Header = ({backgroundState}) => (
    <Container background={backgroundState}>
        <Logo >
            <img as={Link} to="/" src="https://fontmeme.com/permalink/200902/d264b7010f802c033b5fe5f3e71b9ecb.png" alt="CloneFlix logo"></img>
        </Logo>

        <User>
            <img as={Link} to="/" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" alt="User icon"></img>
        </User>
    </Container>
)

export default Header;