import * as React from "react";
import Header from "../includes/Header.js";
import { Grid, Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";

function Integration() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));
  return (
    <div className="Integration">
      <Header />
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Grid container spacing={2}>
          <Grid item size={2}>
              <Card sx={{ maxWidth: 345 , padding: 2}}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    // height="140"
                    image="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
                    alt="AWS Logo"
                    sx={{ objectFit: 'contain', height: 140}}
                  />
                  {/* <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      AWS
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      This card provides a user-friendly interface where users can initiate the AWS integration process by entering their credentials or connecting through a secure API. It serves as the entry point for enabling AWS-based features within the application.
                    </Typography>
                  </CardContent> */}
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Configure
                  </Button>
                  {/* <Button size="small" color="success" disabled>
                    Enable
                  </Button> */}
                  <Button size="small" color="error" disabled>
                    Disabled
                  </Button>
                </CardActions>
              </Card>
          </Grid>
          <Grid item size={2}>
              <Card sx={{ maxWidth: 345 , padding: 2}}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    // height="140"
                    image="https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg"
                    alt="Azure Logo"
                    sx={{ objectFit: 'contain', height: 140}}
                  />
                  {/* <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Azure
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      This card provides a user-friendly interface where users can initiate the Azure integration process by entering their credentials or connecting through a secure API. It serves as the entry point for enabling AWS-based features within the application.
                    </Typography>
                  </CardContent> */}
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Configure
                  </Button>
                  {/* <Button size="small" color="success" disabled>
                    Enable
                  </Button> */}
                  <Button size="small" color="error" disabled>
                    Disabled
                  </Button>
                </CardActions>
              </Card>
          </Grid>
          <Grid item size={2}>
              <Card sx={{ maxWidth: 345 , padding: 2}}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    // height="140"
                    image="https://upload.wikimedia.org/wikipedia/commons/c/ce/Google_cloud.png"
                    alt="GCP Logo"
                    sx={{ objectFit: 'contain', height: 140}}
                  />
                  {/* <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Azure
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      This card provides a user-friendly interface where users can initiate the GCP integration process by entering their credentials or connecting through a secure API. It serves as the entry point for enabling AWS-based features within the application.
                    </Typography>
                  </CardContent> */}
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Configure
                  </Button>
                  {/* <Button size="small" color="success" disabled>
                    Enable
                  </Button> */}
                  <Button size="small" color="error" disabled>
                    Disable
                  </Button>
                </CardActions>
              </Card>
          </Grid>
          <Grid item size={2}>
              <Card sx={{ maxWidth: 345 , padding: 2}}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    // height="140"
                    image="https://upload.wikimedia.org/wikipedia/commons/3/36/Wazuh-2016_2022-Logo.svg"
                    alt="WAZUH Logo"
                    sx={{ objectFit: 'contain', height: 140}}
                  />
                  {/* <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Wazuh
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      This card provides a user-friendly interface where users can initiate the Wazuh integration process by entering their credentials or connecting through a secure API. It serves as the entry point for enabling AWS-based features within the application.
                    </Typography>
                  </CardContent> */}
                </CardActionArea>
                <CardActions sx={{ padding: 1 }}>
                  <Button size="small" color="primary">
                    Configure
                  </Button>
                  <Button size="small" color="error" disabled>
                    Disable
                  </Button>
                </CardActions>
              </Card>
          </Grid>
          
        </Grid>
      </Box>
    </div>
  );
}

export default Integration;
