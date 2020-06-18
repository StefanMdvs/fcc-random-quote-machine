import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Typography';
import CardAction from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
const QuoteMachine = (props) => (
    <Card>
        <CardContent>
            <Typography id="text">
                {props.generateNewQuoteIndex.quote} - <span id="author">{props.generateNewQuoteIndex.author}</span> 
            </Typography>
        </CardContent>
        <CardAction>
            <Button
            variant="outlined" 
            id="new-quote" size='medium' onClick={props.assignNewQuoteIndex}>Next quote</Button>
            <IconButton 
            id="tweet-quote"
            target="_blank"
            title="Tweet this quote"
            href={encodeURI(`https://twitter.com/intent/tweet?text=${props.generateNewQuoteIndex.quote}&hashtags=100DaysOfCode`)}
            
            >
             <FontAwesomeIcon icon={faTwitter} size='md'></FontAwesomeIcon>
            </IconButton>
        </CardAction>
        
        
    </Card>
    
    
    );

export default QuoteMachine;