// importing react components
import React, { useState } from 'react';

// importing styled components
import { Container, ListArea, List, Item, MoveLeft, MoveRight } from './styles';

// importing icons
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const MovieRow = ({title, items}) => {

    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
        let listSize = items.results.length * 150;
        let scrollValue = scrollX + Math.round(window.innerWidth / 2);
        if (scrollX === 0) {
            setScrollX(((window.innerWidth - listSize) - 60));
        }
        else {
            if(scrollValue > 0) {
                scrollValue = 0
            }
            setScrollX(scrollValue);
        }
        
    }

    const handleRightArrow = () => {
        let scrollValue = scrollX - Math.round(window.innerWidth / 2);
        let listSize = items.results.length * 150;
        if (scrollX === ((window.innerWidth - listSize) - 60)) {
            scrollValue = 0;
        }
        if((window.innerWidth - listSize) > scrollValue) {
            scrollValue = (window.innerWidth - listSize) - 60;
        }
        setScrollX(scrollValue);
    }

    return (
        <Container>
            <h2 className="title">{title}</h2>
            <MoveLeft onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 50}} />
            </MoveLeft>
            <MoveRight onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize: 50}} />
            </MoveRight>
    
            <ListArea>
                <List style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <Item key={key}>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                        </Item>       
                    ))}
                </List>
            </ListArea>
        </Container>
    );
}

export default MovieRow;