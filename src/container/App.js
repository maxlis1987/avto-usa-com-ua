// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Stepper from '@material-ui/core/Stepper';
// import Step from '@material-ui/core/Step';
// import StepLabel from '@material-ui/core/StepLabel';
// import StepContent from '@material-ui/core/StepContent';
// import Button from '@material-ui/core/Button';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';

// import Step1 from './Step1';
// import Step2 from './Step2';
// import Step3 from './Step3';
// import Result from './Result';
// import { connect } from 'react-redux';
// import { doAddAuction, doAddParam, doAddCost } from '../actions/inedex';

// const styles = theme => ({
//   root: {
//     width: '90%',
//   },
//   button: {
//     marginTop: theme.spacing.unit,
//     marginRight: theme.spacing.unit,
//   },
//   actionsContainer: {
//     marginBottom: theme.spacing.unit * 2,
//   },
//   resetContainer: {
//     padding: theme.spacing.unit * 3,
//   },
// });

// function getStepContent (step){
//   switch (step) {
//     case 0:
//       return <Step1 />;
//     case 1:
//       return <Step2 />;
//     case 2:
//       return <Step3 />;
//     default:
//       return 'Unknown step';
//   }
// }

// function App (props){
//   const { classes, children, onAddAuction, onAddParam, onAddCost } = props;
//   const [ activeStep, setActiveStep ] = useState(0);
//   const steps = [ 'Аукцион', 'Характеристики', 'Затраты' ];

//   const handleNext = () => {
//     setActiveStep(activeStep + 1);
//   };

//   const handleBack = () => setActiveStep(activeStep - 1);
//   const handleReset = () => setActiveStep(0);

//   const { getItem, setItem, clear } = window.localStorage;
//   switch (activeStep) {
//     case 1:
//       const auction = getItem('auction');
//       const usaState = getItem('usaState');
//       const playground = getItem('playground');

//       onAddAuction({ auction, usaState, playground });
//       clear();
//       break;
//     case 2:
//       const fuel = getItem('fuel');
//       const engine = getItem('engine');
//       const year = getItem('year');

//       onAddParam({ fuel, engine, year });
//       clear();
//       break;
//     case 3:
//       const cost = getItem('cost');
//       const brocker = getItem('brocker');
//       const comision = getItem('comision');
//       const sertificate = getItem('sertificate');
//       const expenses = getItem('expenses');

//       onAddCost({ cost, brocker, comision, sertificate, expenses });
//       clear();
//       break;

//     default:
//       break;
//   }
//   return (
//     <div className={classes.root}>
//       <Stepper activeStep={activeStep} orientation='vertical'>
//         {steps.map((label, index) => (
//           <Step key={label}>
//             <StepLabel>{label}</StepLabel>
//             <StepContent>
//               <Typography variant='display1'>
//                 {getStepContent(index)}
//               </Typography>
//               <div className={classes.actionsContainer}>
//                 <div>
//                   <Button
//                     disabled={activeStep === 0}
//                     onClick={handleBack}
//                     className={classes.button}>
//                     Back
//                   </Button>
//                   <Button
//                     variant='contained'
//                     color='primary'
//                     onClick={handleNext}
//                     className={classes.button}>
//                     {
//                       activeStep === steps.length - 1 ? 'Finish' :
//                       'Next'}
//                   </Button>
//                 </div>
//               </div>
//             </StepContent>
//           </Step>
//         ))}
//       </Stepper>
//       {activeStep === steps.length && (
//         <Paper square elevation={0} className={classes.resetContainer}>
//           <Result />
//           <Button onClick={handleReset} className={classes.button}>
//             Reset
//           </Button>
//         </Paper>
//       )}
//     </div>
//   );
// }

// App.propTypes = {
//   classes: PropTypes.object,
// };

// const Index = withStyles(styles)(App);

// const mapDispatchToProps = dispatch => ({
//   onAddAuction: payload => dispatch(doAddAuction(payload)),
//   onAddParam: payload => dispatch(doAddParam(payload)),
//   onAddCost: payload => dispatch(doAddCost(payload)),
// });

// export default connect(null, mapDispatchToProps)(Index);
import React, {useState, useEffect} from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import NavBar from '../components/NavBar'
import './index.css';
import { withSnackbar } from 'notistack';

import Step1 from './Step1';
import Step2 from './Step2';
const gridExamplesPage = () => {
  const [flexState, setFlexState] = useState('');

  const width = setWindowWidth();

  useEffect(() => {
    if(width < 992){
    setFlexState('desctop');
    }
    else setFlexState('mobail');
  }, [width]);

  return (
    <MDBContainer style={{display: 'flex', flexDirection: flexState == 'desctop' ? 'column' : 'row'}}>

    <MDBContainer>
    <NavBar title='Расчет доставки авто' />
      <Step1 />
      </MDBContainer>
      <br />
      <MDBContainer>
    <NavBar title='Разсчет розтаможки' />
      <Step2 />
      </MDBContainer>

    </MDBContainer>


  );
};
function setWindowWidth() {
	const [width, setWidth] = useState(window.innerWidth);



	useEffect(() => {
		const handlyResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handlyResize);

		return () =>
			window.removeEventListener('resize', handlyResize);
	});
	return width;
}

export default withSnackbar(gridExamplesPage);
