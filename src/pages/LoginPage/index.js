import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Options, Title, OptionsList, OptionsItem } from './styles';

import Header from '../../components/Header';

const LoginPage = () => (
  <Container>
    <Header backgroundState="transparent" options={false}/>
    <Options>
      <Title>Quem está assistindo?</Title>
      <OptionsList>
  
        <OptionsItem to="/" background="https://scontent-gru1-1.xx.fbcdn.net/v/t1.0-9/91433061_3102677403099489_2558380673832321024_n.png?_nc_cat=103&_nc_sid=09cbfe&_nc_eui2=AeFq5vTcLSx4PI7btdzBmTptGaPTavGhP3UZo9Nq8aE_dfJSHnxthpPF-mS-jH1SY8bjWxrHsgfB_q1ILBbKxw6t&_nc_ohc=sKpOBtPwrKwAX8qyyLu&_nc_ht=scontent-gru1-1.xx&oh=314eb76df23d64f1217aa703b7cf2963&oe=5F873282">
          <div className="TMDB-avatar"><div className="effect"/></div>
          <span className="avatar-title">TMDB</span>
        </OptionsItem>

        <OptionsItem to="/" background="https://avatars1.githubusercontent.com/u/9919?s=200&v=4">
          <div className="GitHub-avatar"><div className="effect"/></div>
          <span className="avatar-title">GitHub</span>
        </OptionsItem >

        <OptionsItem to="/" background="https://occ-0-1543-1356.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABYCq-HPaBmwWzyEo8UjC3jQ7a2mKJhU4uPbQwFrauKbu9_-6GpfPccnQh3UWZvsGLQ1MwLo_4YZ-kuTiAsqpq0oEdPXS.png?r=f71">
          <div className="guest-avatar"><div className="effect"/></div>
          <span className="avatar-title">Convidado</span>
        </OptionsItem >

        <OptionsItem to="/" background="https://occ-0-1543-1356.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABa7GR6MkFF2LLamF_Ug-LDF6ILAKat4S48-aFh-Hb8SZLYWW2XwVvBo1Tvb0kPylwA5X1okxHU1SJaxhJYtHWYjmUawn.png?r=1b8">
          <div className="kids-avatar"><div className="effect"/></div>
          <span className="avatar-title">Infantil</span>
        </OptionsItem >

      </OptionsList>
    </Options>
  </Container>
)

export default LoginPage;