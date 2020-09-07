// import react components
import React, { useState, useEffect } from 'react';

// import services
import Tmdb from '../../services/Tmdb';

// importing dialog material 
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';

// importing components
import DialogHeader from './components/DialogHeader';
import DialogDescription from './components/DialogDescription';
import DialogSimilar from './components/DialogSimilar';
import DialogFooter from './components/DialogFooter';


export default function ScrollDialog({children, buttonClass="open-button" , type, itemId}) {
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
    }
    else if (type === 'movie') {
      list = await Tmdb.getMovieDialog(itemId);
      setItems(list);
    }
  }

  loadAll();

  console.log('dialog list', items);
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
            <DialogHeader open={handleClose} item={items?.find(item => item.slug === 'TV_details')}/>
          </DialogTitle>

          <DialogContent dividers={scroll === 'paper'} style={{padding: "48px", paddingTop: "0"}}>

            <DialogDescription item={items?.find(item => item.slug === 'TV_details')} credits={items?.find(item => item.slug === 'TV_credits')} />
            <DialogSimilar item={items?.find(item => item.slug === 'TV_similar')} />
            <DialogFooter item={items?.find(item => item.slug === 'TV_credits')} />

          </DialogContent>

      </Dialog>
    </>
  );
}