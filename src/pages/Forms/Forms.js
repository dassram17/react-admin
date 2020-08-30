import React, { useState } from 'react';

import Inputs from '../../ui/Inputs/Inputs';
import { Card, CardContent, CardActions, Box, Button } from '@material-ui/core';
import { FormInputs } from './FormInputs';
import { validate} from '../../validate';

const Forms = () => {
    const [formData, setFormData] = useState({
        inputs: FormInputs,
        formIsValid: false
    })

    const formElements = [];
    let loading = false;
    
    for(let key in formData.inputs){
        formElements.push({
            id: key,
            config: formData.inputs[key]
        })
    }

    const inputChangeHandler = (event, el) => {
        let changedForm = {
            ...formData.inputs
        }
        let changedFormElement = {
            ...changedForm[el]
        }
        if(changedFormElement.elType === 'Checkbox'){
            let chkOpt = [...changedFormElement.elConfig.options];
            
            let checkedValue = [];
            chkOpt.forEach(opt => {
                if (opt.value === event.target.value){
                    opt.checked =  event.target.checked
                }                  
            })
            chkOpt.forEach(opt => {
                if(opt.checked){
                    checkedValue.push(opt.value);
                }
            });
            
            changedFormElement.value = checkedValue.join(',');
            

        } else if(changedFormElement.elType === 'Radio'){
            let chkOpt = [...changedFormElement.elConfig.options];
            chkOpt.forEach(opt => {
                if (opt.value === event.target.value){
                    opt.checked =  event.target.checked;
                    changedFormElement.value = event.target.value;
                }else{
                    opt.checked = false;
                }
            })
        }else{
            changedFormElement.value = event.target.value;
        }
        changedFormElement.touched = true;

        if(changedFormElement.rules === null){
            changedFormElement.isValid = true;
        }else{
            changedFormElement.isValid = (validate(changedFormElement.value, changedFormElement.rules) === '')?true: false;
            changedFormElement.elConfig.helperText = validate(changedFormElement.value, changedFormElement.rules);
        }
        
        changedForm[el] = changedFormElement; 
        let formIsValid = true;
        for(let element in changedForm){
            formIsValid = changedForm[element].isValid && formIsValid;
        }
        setFormData({inputs: changedForm, formIsValid: formIsValid});
    }

    return(
        <React.Fragment>
            <Card>
                <CardContent>
                    {
                        formElements.map((v, index) => {
                            return (<Inputs key={v.id} config={v.config} changed={(event) => inputChangeHandler(event, v.id)}/>)
                        })
                    }
                </CardContent>  
                <CardActions>
                    <Box display="flex" flexDirection="row" justifyContent="flex-end" width="100%">
                        <Button variant="contained" color="primary" disabled={!formData.formIsValid || loading } type="submit">
                            {(!loading)?'Submit':'Please wait...'}
                        </Button>  
                    </Box>
                </CardActions>  
            </Card>           
            
        </React.Fragment>
    );
}

export default Forms;