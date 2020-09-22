// import react components
import React, { useState, useEffect } from 'react';

// import services
import Tmdb from '../../services/Tmdb';

// importing dialog material 
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';

// importing components
import { DialogHeader, DialogDescription, DialogSeason, DialogSimilar, DialogFooter} from './components';

export function DialogInfo({children, buttonClass="open-button" , type, itemId}) {
  /* React Hooks */
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('body');
  const [items, setItems] = React.useState([]);
  
  useEffect(() => {
    const loadAll = async () => {
    let list = null;
    if(type === 'tv') {
      list = await Tmdb.getTvDialog(itemId);
      setItems(list);
      console.log('dialog tv list', list);
    }
    else if (type === 'movie') {
      list = await Tmdb.getMovieDialog(itemId);
      setItems(list);
      console.log('dialog movie list', list);
    }
  }

  loadAll();

  
  }, []);

  /* Function to open the dialog */ 
  const handleClickOpen = (scrollType='body') => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  /* Function to close the dialog */
  const handleClose = () => {
    setOpen(false);
  };

  /* Creating description element */
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
    <> 
      <button onClick={handleClickOpen('body')}className={buttonClass}>{children}</button>
      <Dialog open={open} onClose={handleClose} scroll={scroll} aria-labelledby="scroll-dialog-title" aria-describedby="scroll-dialog-description">

          <DialogTitle>
            <DialogHeader open={handleClose} item={items?.find(item => item.slug === 'TV_details')} type={type}/>
          </DialogTitle>

          <DialogContent dividers={scroll === 'paper'} style={{padding: "48px", paddingTop: "0"}}>

            <DialogDescription item={items?.find(item => item.slug === 'TV_details')} credits={items?.find(item => item.slug === 'TV_credits')} />

            {(type === 'tv') ? (<DialogSeason item={items?.find(item => item.slug === 'TV_seasons')} />) : ""}

            <DialogSimilar item={items?.find(item => item.slug === 'TV_similar')} />
            <DialogFooter details={items?.find(item => item.slug === 'TV_details')} credits={items?.find(item => item.slug === 'TV_credits')} />

          </DialogContent>

      </Dialog>
    </>
  );
}