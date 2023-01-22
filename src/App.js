//import logo from './logo.svg';
import { Card, CardContent, CardMedia, Container,Typography } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>

        </div>

      </header>

      <div className='bodyContainer'>
      <body>
        
          <Container maxWidth={false} sx={{display: "flex", justifyContent: "center"}} >
            <div className='cardOne'>
            <Card style={{backgroundColor: "rgb(178,110,51,0.8)", border: "2px", borderStyle: "solid", borderColor: "#4d5d53" }} sx={{ mt: "5%", mb: "2.5%", mr: "auto",ml: "auto", textAlign: "center", width: "80%" }} >
              <CardContent>
                <Typography variant='h2' style={{color:'#F0F8FF'}} >Brett R. Gebbie</Typography>
                <Typography style={{fontSize: 20, color:'#F0F8FF'}} >Full Stack Software Engineer</Typography>
                <Typography style={{fontSize: 16, color:'#F0F8FF'}} >St. Paul, MN</Typography>
              </CardContent>
            </Card>
            </div>
          </Container>

          <Container maxWidth={false} sx={{display: "flex", justifyContent: "center"}} >
            <div className='cardTwo'>
            <Card style={{backgroundColor: "rgb(178,110,51,0.8)", border: "2px", borderStyle: "solid", borderColor: "#4d5d53" }} sx={{ mt: "2.5%", mb: "5%", ml: "auto", mr: "auto",textAlign: "center", width: "80%" }} >
              <CardContent>
                <Typography variant='h2' style={{color:'#F0F8FF'}} >WEBSITE UNDER CONSTRUCTION</Typography>
              </CardContent>
            </Card>
            </div>
          </Container>
      </body>
      </div>
    </div>
  );
}

export default App;
//npm run deploy
//reno sand #B26E33 rgb(178,110,51)
//feldgrau #4d5d53
//alice blue #F0F8FF