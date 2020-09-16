// Import React components
import React from 'react';
import { Link } from 'react-router-dom';

// Import Header style 
import { TitleContainer, LinearGradient, CloseButton, TitleInfo, Buttons } from './styles';

// Import icons 
import CloseIcon from '@material-ui/icons/Close';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import AddIcon from '@material-ui/icons/Add';
import CheckIcon from '@material-ui/icons/Check';

import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';


const DialogHeader = ({open, item, type}) => { 
  console.log('dialog header: ', item);
  
  return(
  <TitleContainer backgroundImg={`https://image.tmdb.org/t/p/original${item?.items?.poster_path}`}>
    <LinearGradient>
      <CloseButton>
        <button onClick={open} className="close-button">{<CloseIcon fontSize="large" />}</button>
      </CloseButton>
      <TitleInfo>
        <h1 className="main-title">{item?.items?.original_name}</h1>
        <Buttons>
          <Link className="watch-button" to={`trailer/${type}/${item?.items?.id}`}>{(<PlayArrowIcon style={{fontSize: "25px" , marginRight: "5px"}} />)} Assistir</Link>
          <button className="mylist-button">{<AddIcon fontSize="large"/>}</button>
          <button className="like-button">{<ThumbUpOutlinedIcon fontSize="large"/>}</button>
          <button className="dislike-button">{<ThumbDownOutlinedIcon fontSize="large"/>}</button>
        </Buttons>
      </TitleInfo>
    </LinearGradient>
  </TitleContainer>
)};

export default DialogHeader;