import React, { useEffect } from 'react';
import SimpleLineIcon from 'react-simple-line-icons';

import {
    Box,
    TextField,
    makeStyles,
    InputAdornment,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    FormGroup, 
    FormControlLabel, 
    Checkbox,
    FormLabel, 
    RadioGroup, 
    Radio,
    FormHelperText
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      /* marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1), */
    },
    form: {
        width: '65%',
        margin: "0 auto"
    },
    errorText: {
        color:theme.palette.error.main,
        fontSize:'0.75rem',
        marginLeft:'14px',
        marginRight:'14px',
        lineHeight:'1.66',
        fontWeight:400
    }
}));
const Inputs = (props) => {
    const classes = useStyles();

    const renderIcon = (config) => {
        if(config.icon !== null){
            return <InputAdornment position={config.iconPosition}>{config.icon}</InputAdornment>;
        }else{
            return null;
        }
    }

    const renderInputs = (param) => {
        switch(param.elType) {
            case 'Input':
                return (
                    <TextField
                        error= {!param.isValid && param.touched}
                        type={param.elConfig.type}
                        label={param.elConfig.label}
                        placeholder={param.elConfig.placeholder}
                        className={classes.textField}
                        helperText={param.elConfig.helperText}
                        /* margin="dense" */
                        variant={param.elConfig.variant}
                        fullWidth={param.elConfig.fullWidth}
                        InputProps={{
                            startAdornment: renderIcon(param.elConfig),
                        }}
                        value={param.value}
                        onChange={props.changed}
                    />
                );
            case 'Select':
                return (
                    <FormControl variant="outlined" className={classes.formControl} fullWidth error={!param.isValid && param.touched}>
                        <InputLabel>{param.elConfig.label}</InputLabel>
                        <Select
                            value={param.elConfig.value}
                            label={param.elConfig.label}
                            onChange={props.changed}
                        >
                            {
                                param.elConfig.options.map((option, index) => {
                                    return <MenuItem key={option.value} value={option.value}>{option.displayValue}</MenuItem>
                                })
                            }
                        </Select>
                        <FormHelperText>{param.elConfig.helperText}</FormHelperText>
                    </FormControl>
                );
            case 'Textarea':
                return (
                    <TextField
                        error= {!param.isValid && param.touched}
                        type={param.elConfig.type}
                        label={param.elConfig.label}
                        placeholder={param.elConfig.placeholder}
                        className={classes.textField}
                        helperText={param.elConfig.helperText}
                        /* margin="dense" */
                        variant={param.elConfig.variant}
                        fullWidth={param.elConfig.fullWidth}
                        InputProps={{
                            startAdornment: renderIcon(param.elConfig),
                            multiline: true,
                            rows: param.elConfig.rows,
                            rowsMax: param.elConfig.rowsMax
                        }}
                        value={param.value}
                        onChange={props.changed}
                    />
                );
            case 'Checkbox': 
                return(
                    <React.Fragment>
                        <FormLabel component="legend">{param.elConfig.label}</FormLabel>
                        <FormGroup row>
                            {
                                param.elConfig.options.map((option, index) => {
                                    return <FormControlLabel key={option.value}
                                        control={<Checkbox checked={option.checked} name={param.elConfig.name} value={option.value} onChange={props.changed} />}
                                        label={option.label}
                                    />
                                })
                            }
                        </FormGroup>
                        <div className={classes.errorText}>{param.elConfig.helperText}</div>
                    </React.Fragment>
                );
            case 'Radio': 
                return(
                    <React.Fragment>
                        <FormLabel component="legend">{param.elConfig.label}</FormLabel>
                        <RadioGroup row aria-label="gender" name={param.elConfig.name} value={param.value} onChange={props.changed}>
                            {
                                param.elConfig.options.map((option, index) => {
                                    return <FormControlLabel key={option.value} value={option.value} labelPlacement={param.elConfig.labelPlacement} control={<Radio />} label={option.label} />
                                })
                            }
                        </RadioGroup>
                    </React.Fragment>
                    
                )
            default:
                return (<TextField
                    type="text"
                    label="Username"
                    className={classes.textField}
                    helperText=""
                    /* margin="dense" */
                    variant="outlined"
                    fullWidth
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><SimpleLineIcon name="user" /></InputAdornment>,
                    }}
                />);
            }
    }




    useEffect(() => {
        //console.log(props);
        
    })
    return(
        <Box mb={4}>
            {
                renderInputs(props.config)
            }
        </Box>
    );
}

export default Inputs;