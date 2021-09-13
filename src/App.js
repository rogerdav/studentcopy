import React from 'react';
import logo from './logo.svg';
import './App.css';
import data  from './Students.json';
import {Button, Paper, Card, Grid} from '@material-ui/core';
import FileCopyRoundedIcon from '@material-ui/icons/FileCopyRounded';

let studentsDisplay = data.map((ele) => {

  let subArray = [];
  let fields = Object.keys(ele)
  let excluding = fields.shift();
    for (let i = 1; i < fields.length; i++) {
      let key = fields[i];
      let text = ele[`${key}`]
      subArray.push(
        <Card 
        variant="outlined"
        className="line" >
          <Grid container>
            <Grid item lg={4}>
              {key}
            </Grid>
            <Grid item lg={4}>
              {text}
            </Grid>
            <Grid item lg={4}>
             <FileCopyRoundedIcon onClick={() => navigator.clipboard.writeText(text)}/>
            </Grid>
          </Grid>
        
        </Card>)

    }
    

  return (
    <Paper elevation={6}>
      {subArray}
    </Paper>
  )
})

function App() {
  const [index, setIndex] = React.useState(0);
  return (
    <div className="App">
      <header className="App-header">
      </header>
       <div>
       
         {studentsDisplay[index]}
       </div>
       <div>
         <Button
          onClick={() => setIndex(index + 1)}
         >Next</Button>
      </div> 
    </div>
  );
}

export default App;
