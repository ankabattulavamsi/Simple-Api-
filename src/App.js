import React, { Component } from 'react'
import { Button, Grid, Paper, Typography } from '@mui/material';

class App extends Component {
  state = {
    data : [], 
    show : null
  }

  componentDidMount () {
    this.getData()
  }
  
  getData = async () => {
    try{
      let newdata  = await fetch(`https://jsonplaceholder.typicode.com/users`)
      let updatedData = await newdata.json();
      this.setState({data: updatedData})
    }
    catch(err ){
      console.log(err)
    }
  }

  onClickHandle = (item) => {
    this.setState({show: item.id})
  }

  render() {
    const {data} = this.state

    console.log('data', data)
    return(
      <Grid container spacing={2} sx={{width: 'auto'}}>
        {data.map((item, index) => (
          <Grid item xs={12} md={6} lg={4} >
            <Paper elevation={2} key={index} sx={this.state.show === item.id ? {border : '1px solid black', m: 2, p: 2} : { m: 2, p: 2}} onClick={() => this.onClickHandle(item)}>
                <Typography>user name:- {item.username}</Typography>
                <Typography>name:- {item.name}</Typography>
                <Typography>email:- {item.email}</Typography>
                <Button sx={{mt: 2, border: '1px solid #fff', backgroundColor: 'blue', color: '#fff', letterSpacing: 2}}>Submit</Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    )
  }
}

export default App


