import { useState } from 'react';
import { Field } from './modules/Field';
import { IconButton, Typography, Grid, Container, Paper } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { VideoPlayer } from './modules/Video';
import { SideBar } from './modules/Sidebar';

// json data -> ToDo: call API

const defaultScenes = {
  "points": [
    {
      "x": 200,
      "y": 100,
      "color": "red",
      "label": "1"
    },
    {
      "x": 250,
      "y": 130,
      "color": "red",
      "label": "2"
    },
    {
      "x": 300,
      "y": 140,
      "color": "blue",
      "label": "5"
    },
    {
      "x": 500,
      "y": 300,
      "color": "blue",
      "label": "3"
    }
  ]
}

function App() {


  const [fid, setFid] = useState(0)
  const [scenes, setScenes] = useState(defaultScenes)
  
  const allscenes = [
      {
        "points": [
          {
            "x": 200,
            "y": 100,
            "color": "red",
            "label": "1"
          },
          {
            "x": 250,
            "y": 130,
            "color": "red",
            "label": "2"
          },
          {
            "x": 300,
            "y": 140,
            "color": "blue",
            "label": "5"
          },
          {
            "x": 500,
            "y": 300,
            "color": "blue",
            "label": "3"
          }
        ]
      },
      {
        "points": [
          {
            "x": 250,
            "y": 100,
            "color": "red",
            "label": "1"
          },
          {
            "x": 250,
            "y": 230,
            "color": "red",
            "label": "2"
          },
          {
            "x": 300,
            "y": 240,
            "color": "blue",
            "label": "5"
          },
          {
            "x": 440,
            "y": 300,
            "color": "blue",
            "label": "3"
          }
        ]
      },
      {
        "points": [
          {
            "x": 250,
            "y": 160,
            "color": "red",
            "label": "1"
          },
          {
            "x": 250,
            "y": 260,
            "color": "red",
            "label": "2"
          },
          {
            "x": 320,
            "y": 240,
            "color": "blue",
            "label": "5"
          },
          {
            "x": 440,
            "y": 350,
            "color": "blue",
            "label": "3"
          }
        ]
      },
      {
        "points": [
          {
            "x": 150,
            "y": 100,
            "color": "red",
            "label": "1"
          },
          {
            "x": 280,
            "y": 220,
            "color": "red",
            "label": "2"
          },
          {
            "x": 380,
            "y": 270,
            "color": "blue",
            "label": "5"
          },
          {
            "x": 440,
            "y": 360,
            "color": "blue",
            "label": "3"
          }
        ]
      }
    ]

  const maxfid = allscenes.length - 1
  const fps = 1

  const videourls = [
    "https://youtu.be/M9mKnmt0YaM",
    "https://youtu.be/M9mKnmt0YaM",
  ]
  const videoWidth = 640 / videourls.length
  const videoHeight = 480 / videourls.length

  const handleClickGo = () => {
    var tmpfid = fid + 1
    if (tmpfid >= maxfid) {
      setFid(maxfid)
      setScenes(allscenes[maxfid])
    } else {
      setFid(fid + 1)
      setScenes(allscenes[fid + 1])
    }
  }

  const handleClickBack = () => {
    var tmpfid = fid - 1
    if (tmpfid < 0) {
      setFid(0)
      setScenes(allscenes[0])
    } else {
      setFid(fid - 1)
      setScenes(allscenes[fid - 1])
    }
  }

  return (
    <div className='app'>
      <SideBar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4, ml: 18 }}>
        <Grid container spacing={1}>
          {/* Chart */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                width: 640 + (videourls.length - 1) * 30, 
                height: 450,
              }}
            >
              <Field scenes={scenes} />
              <Typography>scene:{fid}</Typography>
              <Grid item>
                <IconButton onClick={handleClickBack}>
                  <ArrowBackIosIcon />
                </IconButton>
                <IconButton onClick={handleClickGo}>
                  <ArrowForwardIosIcon />
                </IconButton>
              </Grid>
            </Paper>
          </Grid>
          {/* Video Components */}
          {videourls.map((url, idx) => (
            <Grid item>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                width: videoWidth, 
                height: videoHeight ,
              }}
            >
              <Typography>Camera {idx}</Typography>
              <VideoPlayer
              url={url}
              ftime={fid * fps}
              width={videoWidth}
              height={videoHeight}
              />

            </Paper>
          </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
