import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
// useTheme
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
// import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
// import Modal from "@material-ui/core/Modal";
// import MobileStepper from "@material-ui/core/MobileStepper";
// import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
// import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
// import SwipeableViews from 'react-swipeable-views';
// import { autoPlay } from 'react-swipeable-views-utils';


import project1 from "../images/chatbox-image.png";
import project2 from "../images/TaxCommun-image.png";
import project3 from "../images/dys-help-image.png";
import project4 from "../images/VCS-app-image.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
  // modalStyle: {
  //   position: 'absolute',
  //   top: '50%',
  //   left: '50%',
  //   transform: 'translate(-50%, -50%)',
  //   width: 400,
  //   bgcolor: 'background.paper',
  //   border: '2px solid #000',
  //   boxShadow: 24,
  //   p: 4,
  // },
  // swipeableBox: {
  //   width: '400px',
  //   position: 'absolute',
  //   top: '50%',
  //   left: '50%',
  //   transform: 'translate(-50%, -50%)',
  //   bgcolor: 'background.paper',
  //   border: '2px solid #000',
  //   boxShadow: 24,
  //   p: 4,
  // }
}));

const projects = [
  {
    name: "Project 1",
    description: `Application web de messagerie en ligne qui permet a un ou\
    plusiers utilisateurs de s'inscrire ou se connecter e pouvoir\
    envoyer, recevoir des messages de la part des utilisateur inscrit\
    et aussi de creer des groupe de conversation!`,
    image: project1,
    code_source: 'https://github.com/Bakayoko99/chatbox_web-app'
  },
  {
    name: "Project 2",
    description: `Site web de payement des taxes en ligne, l'utilisateur\
    peut s'inscrire, se connecter, visualiser et payer les payements\
    effectuees. Il'ya egalement une interface Agent pour regler les payements\
    puis l'interface Admin.`,
    image: project2,
    code_source: 'https://github.com/Bakayoko99/TaxCommune_web-app'
  },
  {
    name: "Project 3",
    description: `Site web pour aider les personnes atteintes de troubles 'DYS'.\
    Il dispose d'une page d'accueil avec des informations a propos\
    des troubles, la page outils, la page transcription pour\
    retranscrire les documents et la page contact.`,
    image: project3,
    code_source: 'https://github.com/Bakayoko99/dys-help_web-app'
  },
  {
    name: "Project 4",
    description: `Application mobile demo de surveillance à domicile.\
    L'application dispose de 6 interface : interface de connection, d'inscription,\
    l'incerface d'utilisateur, \
    Telesurveillance, Action d'urgence et Outils connectées.`,
    image: project4,
    code_source: 'https://github.com/Bakayoko99/VCS-app'
  },
];

//  Swipeable

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// const images = [
//   {
//     label: 'San Francisco – Oakland Bay Bridge, United States',
//     imgPath:
//       project1,
//   },
//   {
//     label: 'Bird',
//     imgPath:
//       'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
//   },
//   {
//     label: 'Bali, Indonesia',
//     imgPath:
//       'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
//   },
//   {
//     label: 'Goč, Serbia',
//     imgPath:
//       'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
//   },
// ];

//

const Portfolio = () => {

  const classes = useStyles();

  // Modal

  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);


  // Swipeable

  // const theme = useTheme();
  // const [activeStep, setActiveStep] = React.useState(0);
  // const maxSteps = images.length;

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  // const handleStepChange = (step) => {
  //   setActiveStep(step);
  // };

  //

  // const imageDemo = (name) => {

    



  // }


  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" target="_blank" href={project.code_source}>
                  Code source
                </Button>
                {/* <Button onClick={handleOpen, imageDemo(project.name)} size="small" color="primary">
                  Images Demo
                </Button> */}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        // className={classes.modalStyle}
      >
        <Box className={classes.swipeableBox}>
          <Paper
            square
            elevation={0}
            sx={{
              display: 'flex',
              alignItems: 'center',
              height: 50,
              pl: 2,
              bgcolor: 'background.default',
            }}
          >
            <Typography>{images[activeStep].label}</Typography>
          </Paper>
          <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {images.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      height: 255,
                      display: 'block',
                      maxWidth: 400,
                      overflow: 'hidden',
                      width: '100%',
                    }}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </Box>
      </Modal> */}
    </Box>
  );
};

export default Portfolio;
