import React, { Component } from 'react';
import { random } from 'lodash';
import 'typeface-roboto';
//import Grid from '@material-ui/core/Grid';
//import { withStyles } from '@material-ui/core/styles';
import QuoteMachine from './components/QuoteMachine';
import { Grid, withStyles } from '@material-ui/core';

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    alignItems: 'center'
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      quotes: [],
      selectedQuoteIndex: null
    }
    this.selectQuoteIndex = this.selectQuoteIndex.bind(this);
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);

  }
  componentDidMount() {
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
    .then(data => data.json())
    .then(quotes => this.setState({ quotes }, this.assignNewQuoteIndex));
  }
get generateNewQuoteIndex () {
  if(!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)){
    return undefined;
  }
  return this.state.quotes[this.state.selectedQuoteIndex];
}

  selectQuoteIndex(){
    if(!this.state.quotes.length){
      return undefined;
    }
    return random(0, this.state.quotes.length -1);
  }
   assignNewQuoteIndex(){
    this.setState({selectedQuoteIndex : this.selectQuoteIndex()});
  }

  render() {
    console.log(this.state.selectedQuoteIndex)
  return (
    <Grid className={this.props.classes.container} id="quote-box" justify="center" container>
      <Grid xs={11} lg={8} item>
        {
          this.generateNewQuoteIndex ? 
          <QuoteMachine generateNewQuoteIndex={this.generateNewQuoteIndex} 
      assignNewQuoteIndex={this.assignNewQuoteIndex}/> : null
        }
      </Grid>
      
    </Grid>
  );
  }
}

export default withStyles(styles)(App);