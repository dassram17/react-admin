import React from 'react';
import SimpleLineIcon from 'react-simple-line-icons';
import DialpadIcon from '@material-ui/icons/Dialpad';

export const FormInputs = {
    textInput: {
        elType: 'Input',
        elConfig: {
            type:'input',
            label: 'Input',
            placeholder: '',
            name:'input',
            icon: <SimpleLineIcon name="user" />,
            iconPosition: 'start',
            variant: 'outlined',
            fullWidth: true,
            helperText: ''
        },
        value:'',
        touched: false,
        isValid: false,
        rules:[{
            required: true,
            message: 'Please enter username'
        }]
    },
    numberInput: {
        elType: 'Input',
        elConfig: {
            type:'number',
            label: 'Number',
            placeholder: '',
            name:'number',
            icon: <SimpleLineIcon name="phone" />,
            iconPosition: 'start',
            variant: 'outlined',// standard, // filled
            fullWidth: true,
            helperText: ''
        },
        value:'',
        touched: false,
        isValid: false,
        rules:[{
            required: true,
            message: 'Please enter number'
        },{
            maxLength: 6,
            message: 'Not more than 6 characters!.'
        }]
    },
    telInput: {
        elType: 'Input',
        elConfig: {
            type:'tel',
            label: 'Telephone',
            placeholder: '',
            name:'telephone',
            icon: <DialpadIcon />,// material icon
            iconPosition: 'start',
            variant: 'outlined',
            fullWidth: true,
            helperText: ''
        },
        value:'',
        touched: false,
        isValid: false,
        rules:[{
            required: true,
            message: 'Please enter telephone'
        }]
    },
    emailInput: {
        elType: 'Input',
        elConfig: {
            type:'email',
            label: 'E-Mail',
            placeholder: '',
            name:'email',
            icon: <SimpleLineIcon name="envelope" />,
            iconPosition: 'start',
            variant: 'outlined',
            fullWidth: true,
            helperText: ''
        },
        value:'',
        touched: false,
        isValid: false,
        rules:[{
            required: true,
            message: 'Please enter email'
        },{
            email: true,
            message: 'Not an email'
        }]
    },
    dateInput: {
        elType: 'Input',
        elConfig: {
            type:'date',
            label: 'Date',
            placeholder: '',
            name:'data',
            icon: <SimpleLineIcon name="user" />,
            iconPosition: 'start',
            variant: 'outlined',
            fullWidth: true,
            helperText: ''
        },
        value:'',
        touched: false,
        isValid: false,
        rules:[{
            required: true,
            message: 'Please enter date'
        }]
    },
    timeInput: {
        elType: 'Input',
        elConfig: {
            type:'time',
            label: 'Time',
            placeholder: '',
            name:'time',
            icon: <SimpleLineIcon name="user" />,
            iconPosition: 'start',
            variant: 'outlined',
            fullWidth: true,
            helperText: ''
        },
        value:'',
        touched: false,
        isValid: false,
        rules:[{
            required: true,
            message: 'Please choose time'
        }]
    },
    /*** Select input */
    selectInput: {
        elType: 'Select',
        elConfig: {
            type:'select',
            label: 'Select',
            placeholder: '',
            name:'gender',
            icon: <SimpleLineIcon name="user" />,
            iconPosition: 'start',
            variant: 'outlined',
            fullWidth: true,
            helperText: '',
            options: [
                {
                    value: '',
                    displayValue: 'None'
                },
                {
                    value: 'Opt1',
                    displayValue: 'Option 1'
                },
                {
                    value: 'Opt2',
                    displayValue: 'Option 2'
                }
            ]
        },
        value:'',
        touched: false,
        isValid: false,
        rules:[{
            required: true,
            message: 'Please choose any value'
        }]
    },
    textareaInput: {
        elType: 'Textarea',
        elConfig: {
            label: 'Textarea',
            placeholder: '',
            name:'textarea',
            icon: '',
            iconPosition: 'start',
            variant: 'outlined',
            fullWidth: true,
            helperText: '',
            row: 1,
            rowsMax: 5
        },
        value:'',
        touched: false,
        isValid: false,
        rules:[{
            required: true,
            message: 'Please enter address'
        }]
    },
    checkboxInput: {
        elType: 'Checkbox',
        elConfig: {
            name:'textarea',
            label: 'Checkbox',
            helperText: '',
            options: [{
                label: 'Checkbox',
                checked: false,
                value: 'apple'
            },{
                label: 'Checkbox2',
                checked: false,
                value: 'banana'
            }],
        },
        value:'',
        touched: false,
        isValid: false,
        rules:[{
            required: true,
            message: 'Please check atleast one value'
        }]
    },
    radioInput: {
        elType: 'Radio',
        elConfig: {
            name:'radio',
            label:'Gender',
            labelPlacement:'end',//start, end, top, bottom
            helperText: '',
            options: [{
                label: 'Male',
                checked: false,
                value: 'male'
            },{
                label: 'Female',
                checked: false,
                value: 'female'
            }],
        },
        value:'',
        touched: false,
        isValid: false,
        rules:[{
            required: true,
            message: 'Please choose any value'
        }]
    },
}