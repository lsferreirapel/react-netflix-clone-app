// import react components
import React from 'react';

// importing dialog material 
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

// importing styles
/* dialog containers style*/
import { Container, DialogContainer, MainContent } from './styles'; 
/* Dialog title style */
import { TitleContainer, LinearGradient, CloseButton, TitleInfo, Buttons } from './styles'; 
/* Dialog info style */
import { MainInfo, RateInfo, Description,  FilmInfo, Cast, Genres, Tags } from './styles';
/* Dialog sugestion list style */
import { About, AboutInfo, Director, AboutCast, AboutGenres, Script } from './styles';
/* Dialog about style */
import { Sugestion, List } from './styles';
/* Reset to dialog default values */
import './reset.css';

//importing icons
import CloseIcon from '@material-ui/icons/Close';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import AddIcon from '@material-ui/icons/Add';
import CheckIcon from '@material-ui/icons/Check';

import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';

export default function ScrollDialog({openButton, buttonName}) {
  /* React Hooks */
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('body');

  /* Function to open the dialog */ 
  const handleClickOpen = (scrollType='body') => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  /* Function to close the dialog */
  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  

  return (
    <Container>  
      <openButton onClick={handleClickOpen('body')} className="open-button">{buttonName}</openButton>
      <Dialog 
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogContainer>
          <DialogTitle 
          id="scroll-dialog-title"
          style={{ }}
          >
              <TitleContainer>
                <LinearGradient>
                  <CloseButton>
                    <button onClick={handleClose} className="close-button">{<CloseIcon fontSize="large" />}</button>
                  </CloseButton>
                  <TitleInfo>
                    <h1 className="main-title">Fight Club</h1>
                    <Buttons>
                        <button className="watch-button" href="/">{<PlayArrowIcon fontSize="large"/>} Assistir</button>
                        <button className="mylist-button" href="/">{<AddIcon fontSize="large"/>}</button>
                        <button className="like-button" href="/">{<ThumbUpOutlinedIcon fontSize="large"/>}</button>
                        <button className="dislike-button" href="/">{<ThumbDownOutlinedIcon fontSize="large"/>}</button>
                    </Buttons>
                  </TitleInfo>
                </LinearGradient>
              </TitleContainer>
          </DialogTitle>
          <DialogContent
            dividers={scroll === 'paper'}
            style={{backgroundColor: "#141414", padding: "48px", paddingTop: "0"}}
          >
            <MainContent>
              <MainInfo>
                  <RateInfo>
                      <span className="rate">84% relevante</span>
                      <div className="year" >1999</div>
                      <span className="duration">2h 19m</span> {/* if the item is a Movie Season=runtime else Season=season */}
                      <Description>
                        <p>Um homem deprimido que sofre de insônia conhece um estranho vendedor chamado Tyler Durden e se vê morando em uma casa suja depois que seu perfeito apartamento é destruído. A dupla forma um clube com regras rígidas onde homens lutam. A parceria perfeita é comprometida quando uma mulher, Marla, atrai a atenção de Tyler.</p>
                      </Description>
                  </RateInfo>
                  <FilmInfo>
                      <Cast>
                        <span className="name">Elenco: </span>
                        <a>Edward Norton, </a>
                        <a>Brad Pitt, </a>
                        <a>Helena Bonham Carter, </a>
                        <a>Meat Loaf, </a>
                        <a className="seemore">mais</a>
                      </Cast>
                      <Tags>
                        <span className="name">Tags: </span>
                        <a>Má conduta, </a>
                        <a>Caos, </a>
                        <a>Sabão, </a>
                        <a className="seemore">mais</a>
                      </Tags>
                      <Genres>
                        <span className="name">Gêneros: </span>
                        <a>Drama</a>
                      </Genres>
                  </FilmInfo>
              </MainInfo>
              <Sugestion>
                  <p className="sugestion-title">Títulos semelhantes</p>
                  <List />
              </Sugestion>
              <About>
                  <p className="sugestion-title"> Sobre Fight Club</p>
                  <AboutInfo>
                      <Director>
                        <span className="tag-name"></span>
                        <a></a>
                      </Director>
                      <AboutCast>
                        <span className="tag-name"></span>
                        <a></a>
                      </AboutCast>
                      <Script>
                        <span className="tag-name"></span>
                        <a></a>
                      </Script>
                      <AboutGenres>
                        <span className="tag-name"></span>
                        <a></a>
                      </AboutGenres>
                  </AboutInfo>
              </About>
            </MainContent>
          </DialogContent>
        </DialogContainer>
      </Dialog>
    </Container>
  );
}