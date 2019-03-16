// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';

// import { useFormInput } from './functions';

// const styles = theme => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   textField: {
//     marginLeft: theme.spacing.unit,
//     marginRight: theme.spacing.unit,
//     minWidth: 300,
//   },
// });

// function Input (props){
//   const { classes, placeholder } = props;
//   const value = useFormInput('');

//   return (
//     <div className={classes.container}>
//       <TextField
//         id='standard-textarea'
//         label={placeholder}
//         placeholder={placeholder}
//         multiline
//         {...value}
//         className={classes.textField}
//         margin='normal'
//       />
//     </div>
//   );
// }

// Input.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(Input);
import React from 'react';
import MaskedInput from 'react-text-mask';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {doAddCostCar,doAddCostTransit,doAddCostAll} from '../actions';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
});

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value,
          },
        });
      }}
      thousandSeparator
      prefix="$"
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};


class FormattedInputs extends React.PureComponent {
  state = {
    numberformat: '1',

  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
componentDidUpdate(){
  const {  numberformat } = this.state;
  this.props.onAddCostCar({ numberformat })
}

  render() {
    const { classes, costCar } = this.props;
    const {  numberformat } = this.state;

    return (
      <React.Fragment>
      <div className={classes.container}>
        <TextField
          className={classes.formControl}
          label="Цена покупки"
          value={numberformat}
          onChange={this.handleChange('numberformat')}
          id="formatted-numberformat-input"
          InputProps={{
            inputComponent: NumberFormatCustom,
          }}
        /><br />
      </div>
      {this.state.numberformat > 1 && (
        <React.Fragment>
          <Typography  variant="h6" color="secondary">
            {(+this.state.numberformat / 100).toFixed(2)}$   - 1% Комиссия аукциона
          </Typography>
          <Typography   variant="h6" color="primary">
              ИТОГО: {(+this.state.numberformat + +this.state.numberformat / 100).toFixed(2)}$

          </Typography>
        </React.Fragment>
      )}
      </React.Fragment>
    );
  }
}

FormattedInputs.propTypes = {
  classes: PropTypes.object.isRequired,
};

const WithFormatInputs = withStyles(styles)(FormattedInputs);

const mapStateToProps = state => ({
  summaState: state.summaState.costCar,
});

const mapDispatchToProps = dispatch => ({
  onAddCostCar: payload => dispatch(doAddCostCar(payload)),

});
export default connect(mapStateToProps,mapDispatchToProps)(WithFormatInputs);
